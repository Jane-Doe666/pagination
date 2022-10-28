import React, { useEffect, useState } from "react";
import TextField from "../components/textField";
import { isRequired } from "../utils/validateRules";
import { validator } from "../utils/validator";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setErrors] = useState({});

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
        console.log(111, errors);
        return Object.keys(errors).length === 0;
    };

    console.log(222, error);

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isRequired(data.password) || !isRequired(data.email)) return; // other way !!!
        console.log("isRequired", data);
    };
    const isValid = Object.keys(error).length === 0;
    console.log("isValid", isValid);

    return (<div className="container mt-5">
        <div className="row">
            <div className="col-md-6 offset-md-3 shadow p-4">
                <h3 className="mb-4">Login</h3>
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
                    <button type="submit" disabled={!isValid} className="btn btn-primary w-100 m">
            Submit
                    </button>
                </form>
            </div>
        </div>
    </div>);
};

export default Login;
