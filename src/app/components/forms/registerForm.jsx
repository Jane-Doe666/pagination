import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import { isRequired } from "../../utils/validateRules";
import TextField from "./textField";
import api from "../../../api";
import SelectField from "./selectField";
import RadioField from "./radioField";
import MyltiSelect from "./myltiSelect";
import CheckBoxField from "./checkBoxField";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "", password: "", profession: "", sex: "male", qualities: [], licence: false
    });
    const [error, setErrors] = useState({});
    const [professions, setProfessions] = useState([]);
    const [qualities, setQualityes] = useState({});

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
        api.users.getByQual().then((data) => setQualityes(data));
    }, []);

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения!"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapital: {
                message: "Пароль должен содержать хотя бы одну загланую букву "
            },
            isDigit: {
                message: "Пароль должен содержать хотя бы одну цифру"
            },

            min: {
                message: "Пароль должен содержать минимум 8 знаков",
                value: 8
            },
        },
        profession: {
            isRequired: {
                message: "Обязательно выбирите ваше профессию"
            }
        },
        licence: {
            isRequired: {
                message: "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения"
            }
        },
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isRequired(data.password) || !isRequired(data.email)) return ""; // other way !!!
    };
    const isValid = Object.keys(error).length === 0;

    return (<>
        <form onSubmit={handleSubmit}>
            <TextField
                label="E-mail"
                id="email"
                name="email"
                onChange={handleChange}
                value={data.email}
                error={error.email}

            />
            <TextField
                label="Password"
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
                error={error.password}

            />
            <SelectField
                label="Выберете ваше профессию"
                defaultOption="Choose..."
                options={professions}
                onChange={handleChange}
                value={data.professions}
                error={error.profession}
            />
            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" },
                ]}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Ваш пол : "
            />
            <MyltiSelect
                options={qualities}
                onChange={handleChange}
                name="qualities"
                label="Качества для вашего выбора : "
            />
            <CheckBoxField
                value={data.licence}
                onChange={handleChange}
                name="licence"
                error={error.licence}
            >
                <a>Подтвердить соглашение</a>
            </CheckBoxField>
            <button type="submit"
                disabled={!isValid}
                className="btn btn-primary w-100 m"
            >
                    Submit
            </button>
        </form>
    </>
    );
};

export default RegisterForm;
