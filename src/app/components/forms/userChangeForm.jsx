/* eslint-disable */
import React, { useEffect, useState } from "react";
import TextField from "./textField";
import SelectField from "./selectField";
import MultiSelect from "./multiSelect";
import api from "../../../api";
import LoadingSpinner from "../common/loadingSpinner";
import RadioField from "./radioField";
import { useHistory } from "react-router-dom";
import { validator } from "../../utils/validator";
import { isRequired } from "../../utils/validateRules";
import { data } from "autoprefixer";

const UserChangeForm = ({ userId }) => {
    const { history } = useHistory();

    const [error, setErrors] = useState({});
    const [user, setUser] = useState();
    const [professions, setProfessions] = useState([]);
    const [qualities, setQualityes] = useState({});
    const [loader, setLoader] = useState(false);

    // const getProfessionById = (id) => {
    //     for (const prof of professions) {
    //         if (prof.value === id) {
    //             return { _id: prof.value, name: prof.label };
    //         }
    //     }
    // };
    // const getQualities = (elements) => {
    //     const qualitiesArray = [];
    //     for (const elem of elements) {
    //         for (const quality in qualities) {
    //             if (elem.value === qualities[quality].value) {
    //                 qualitiesArray.push({
    //                     _id: qualities[quality].value,
    //                     name: qualities[quality].label,
    //                     color: qualities[quality].color
    //                 });
    //             }
    //         }
    //     }
    //     return qualitiesArray;
    // };

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
        console.log(user)

        api.professions.fetchAll().then((data) => {
            const profList = Object.keys(data).map((prof) => ({
                value: data[prof]._id, label: data[prof].name
            }));
            console.log(1, profList)
             setProfessions(profList);
        });

        api.users.getByQual().then((data) => {
            const qualList = Object.keys(data).map((qual) => ({
                value: data[qual]._id, label: data[qual].name, color: data[qual].color
            }));
             setQualityes(qualList);
        });
    }, []);

    console.log(11, professions)
    // console.log(22, qualities)

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

    const validate = () => {
        const errors = validator(user, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (target) => {
        setUser((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    // console.log(444, user.profession)


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isRequired(user.password) || !isRequired(user.email)) return "";
        const { profession, qualities } = user
        api.users
            .update ( userId, {
                ...data,
                profession: getProfessionById ( profession ),
                qualities: getQualities ( qualities ),
            } )
            .then ( data => history.push ( `/users/${data._id}` ) )
        history.push(`/users/${user._id}`);
    };
    const isValid = Object.keys(error).length === 0;

    return (professions.length > 0 && loader && <>
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
    );
};

export default UserChangeForm;
