import React, { useEffect, useState } from "react";
import TextField from "./textField";
import SelectField from "./selectField";
import MultiSelect from "./multiSelect";
import api from "../../../api";
import LoadingSpinner from "../common/loadingSpinner";
import RadioField from "./radioField";
import { useHistory } from "react-router-dom";

const UserChangeForm = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    const [professions, setProfessions] = useState([]);
    const [qualities, setQualityes] = useState([]);

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
        api.professions.fetchAll().then((data) => setProfessions(data));
        api.users.getByQual().then((data) => setQualityes(data));
    }, []
    );

    const handleSubmit = () => {
        api.users.update(userId, user)
            .then(history.push(`/users/${userId}`));
    };

    const handleChange = (target) => {
        console.log(target);
        setUser((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    return (!user
        ? <LoadingSpinner/>
        : <div className="mb-4">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="name"
                    label="Имя"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                />
                <TextField
                    id="email"
                    label="Электронная почта"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
                <SelectField
                    id="profession"
                    label="Выбери свою профессию"
                    name="profession"
                    options={professions}
                    onChange={handleChange}
                    value={user.profession.name}
                />
                <RadioField
                    options={[
                        { name: "Male", value: "male" },
                        { name: "Female", value: "female" },
                        { name: "Other", value: "other" },
                    ]}
                    value={user.sex}
                    name="sex"
                    onChange={handleChange}
                    label="Ваш пол : "
                />
                <MultiSelect
                    label="Выберите ваши качества"
                    name="quality"
                    value=""
                    defaultValue={user.qualities}
                    options={qualities}
                    onChange={handleChange}
                />
                <button className="btn btn-primary w-100 m"
                    onChange={handleSubmit}
                    type="submit"
                    role="button"
                >
                Обновить
                </button>
            </form>
        </div>

    );
};

export default UserChangeForm;
