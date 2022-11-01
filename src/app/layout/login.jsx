import React, { useState } from "react";
import LoginForms from "../components/forms/loginForms";
import { useParams } from "react-router-dom";
import RegisterForm from "../components/forms/registerForm";

const Login = () => {
    const { type } = useParams();
    const [formTypes, setFormTypes] = useState(type === "register" ? type : "login");
    const handleTypes = () => {
        setFormTypes(prevState => prevState === "register" ? "login" : "register");
    };

    return (<>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {
                        formTypes === "register"
                            ? <>
                                <h3 className="mb-4">Register</h3>
                                <RegisterForm/>
                                <p>Already have an account?<a role="button" onClick={handleTypes}>Sign In</a></p>
                            </>

                            : <>
                                <h3 className="mb-4">Login</h3>
                                <LoginForms/>
                                <p>You do not have an account? <a role="button" onClick={handleTypes}>Sign Up</a></p>
                            </>
                    }
                </div>
            </div>
        </div>
    </>);
};

export default Login;
