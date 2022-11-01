import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import { isRequired } from "../../utils/validateRules";
import TextField from "./textField";
import api from "../../../api";

const RegisterForm = () => {
    const [data, setData] = useState({ email: "", password: "", select: "" });
    const [error, setErrors] = useState({});
    const [selectedProf, setSelectedProf] = useState();

    useEffect(() => {
        api.professions.fetchAll().then((data) => setSelectedProf(data));
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
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = ({ target }) => {
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
            <div className="mb-4">
                <label htmlFor="validationCustom04" className="form-label">State</label>
                <select
                    className="form-select"
                    id="validationCustom04"
                    name="profession"
                    value={data.profession}
                    onChange={handleChange}
                >
                    <option
                        selected={data.profession === ""}
                        disabled
                        value=""
                    >
                        Choose...
                    </option>
                    {selectedProf &&
                        Object.keys(selectedProf).map(
                            (prof) =>
                                <option
                                    key={selectedProf[prof]._id}
                                    // selected={selectedProf[prof]._id === data.profession}
                                    value={selectedProf[prof]._id}
                                >
                                    {selectedProf[prof].name}
                                </option>
                        )}
                </select>
                <div className="invalid-feedback">
                    Please select a valid state.
                </div>
            </div>
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
