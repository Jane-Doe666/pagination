/* eslint-disable */
import React, { useEffect, useState } from "react";
import TextField from "../../forms/textField";
import SelectField from "../../forms/selectField";
import MultiSelect from "../../forms/multiSelect";
import api from "../../../../api";
import RadioField from "../../forms/radioField";
import { useHistory } from "react-router-dom";
import { validator } from "../../../utils/validator";
import { isRequired } from "../../../utils/validateRules";
import { data } from "autoprefixer";
import BackHistoryButton from "../../common/backButton";

const UserEditPage = ({ userId }) => {
    const history = useHistory();
    const [loader, setLoader] = useState(false);
    const [professions, setProfessions] = useState([]);
    const [qualities, setQualityes] = useState([]);
    const [error, setErrors] = useState({});
    const [user, setUser] = useState();

    const getProfessionById = (id) => {
        for (const prof of professions) {
            if (prof.value === id) {
                return { _id: prof.value, name: prof.label };
            }
        }
    };

    const getQualities = (elements) => {
        console.log(666, elements)
        const qualitiesArray = [];
        for (const elem of elements) {
            for (const quality in qualities) {
                if (elem.value === qualities[quality].value) {
                    qualitiesArray.push({
                        _id: qualities[quality].value,
                        name: qualities[quality].label,
                        color: qualities[quality].color
                    });
                }
            }
        }
        return qualitiesArray;
    };

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        if (!isRequired(user.email)) return "";
        const { profession, qualities } = user
        console.log(user)
        api.users
            .update(userId, {
                ...data,
                profession: getProfessionById(profession),
                qualities: getQualities(qualities),
            })
            .then((data) => history.push(`/users/${data._id}`))

        console.log(1, {
            ...data,
            profession: getProfessionById(profession),
            qualities: getQualities(qualities),
        })
    };

    const transformQual = (data) => {
        return data.map((el) => ({ label: el.name, value: el._id }));
    };

    useEffect(() => {
        api.users.getById(userId).then(({ profession, qualities, ...data }) => {
            setUser((prevState) => ({
                ...prevState,
                ...data,
                qualities: transformQual(qualities),
                profession: profession._id,
            }));
            setLoader(true);
        });

        api.professions.fetchAll().then((data) => {
            const profList = Object.keys(data).map((prof) => ({
                value: data[prof]._id, label: data[prof].name
            }));
            setProfessions(profList);
        });

        api.users.getByQual().then((data) => {
            const qualList = Object.keys(data).map((qual) => ({
                value: data[qual]._id, label: data[qual].name, color: data[qual].color
            }));
            setQualityes(qualList);
        });
    }, []);


    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения!"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        }
    };

    useEffect(() => {
        validate();
    }, [user]);

    const handleChange = (target) => {
        setUser((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validate = () => {
        const errors = validator(user, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(error).length === 0;

    return (
        <div className="container mt-5">
            <BackHistoryButton/>
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {professions.length > 0 && loader && <>

                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="name"
                                id="name"
                                name="name"
                                onChange={handleChange}
                                value={user.name}
                            />
                            <TextField
                                label="E-mail"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                value={user.email}
                                error={error.email}
                            />
                            <SelectField
                                label="Выберете ваше профессию"
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
                                defaultValue={user.qualities}
                                name="qualities"
                                label="Качества для вашего выбора : "
                            />
                            <button type="submit"
                                    disabled={!isValid}
                                    className="btn btn-primary w-100 m"
                            >
                                Submit
                            </button>
                        </form>
                    </>
                    }
                </div>
            </div>
        </div>);
};

export default UserEditPage;
