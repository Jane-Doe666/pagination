/* eslint-disable */
import React, { useEffect, useState } from "react";
import api from "../../../api";
import LoadingSpinner from "../common/loadingSpinner";
import SelectField from "../forms/selectField";

const NewCommetCard = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleChange = (target) => {
        setUsers((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    if (users) {
        return (
            <>
                <div className="card mb-2">
                    <div className="card-body ">
                        <h2>New comment</h2>
                        <SelectField
                            options={users}
                            onChange={handleChange}
                            name="users"
                            defaultOption="Выберите пользователя"
                            value={users.profession}
                        />
                        <div className="mb-4">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label" >
                                Сообщение
                            </label>
                            <textarea
                                rows="3"
                                className="form-control"
                                placeholder="Leave a comment here"
                                id="exampleFormControlTextarea1">

                            </textarea>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        <LoadingSpinner/>
    };
};

export default NewCommetCard;
