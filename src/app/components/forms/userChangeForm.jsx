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
    const [isLoading, setIsLoading] = useState(false);
    const transformData = (data) => {
        return data.map(qual => ({ label: qual.name, value: qual._id }));
    };

    const getProfessionById = id => {
        for (const prof of professions) {
            if (prof.value === id) {
                return {
                    _id: prof.value,
                    name: prof.label,
                };
            }
        }
    };
    const getQualities = elements => {
        const qualitiesArray = [];
        for (const elem of elements) {
            for (const quality in qualities) {
                if (elem.value === qualities[quality].value) {
                    qualitiesArray.push({
                        _id: qualities[quality].value,
                        name: qualities[quality].label,
                        color: qualities[quality].color,
                    });
                }
            }
        }
        return qualitiesArray;
    };

    useEffect(() => {
        setIsLoading(true);
        api.users.getById(userId).then(({ profession, qualities, ...data }) => setUser({
            ...data,
            profession: profession._id,
            qualities: transformData(qualities)
        }));
    }, []
    );

    useEffect(() => {
        api.users.getByQual().then((data) => {
            const qualitiesList = Object.keys(data).map(optionName => ({
                value: data[optionName]._id,
                label: data[optionName].name,
                color: data[optionName].color
            }));
            return setQualityes(qualitiesList);
        });
    }, []);

    useEffect(() => {
        api.professions.fetchAll().then(data => {
            const profList = Object.keys(data).map(prof => ({
                name: profList[prof].name, value: profList[prof]._id
            }));
            return setProfessions(profList);
        });
    }, []);

    console.log(user);

    useEffect(() => {
        if (user) setIsLoading(false);
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { profession, qualities } = user;
        api.users.update(userId, {
            ...user,
            profession: getProfessionById(profession),
            qualities: getQualities(qualities),
        })
            .then(user => history.push(`/users/${userId}`));
    };

    const handleChange = (target) => {
        console.log("target", target);
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
                    label="Выбери свою профессию"
                    defaultOption="Choose..."
                    name="profession"
                    options={professions}
                    onChange={handleChange}
                    value={user.profession}
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
                    options={qualities}
                    onChange={handleChange}
                    defaultValue={user.qualities }
                    name="qualities"
                    label="Выберите ваши качества"
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
