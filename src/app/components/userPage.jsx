import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../../api";
import LoadingSpinner from "./loadingSpinner";
import Quality from "./quality";

const UserPage = () => {
    const { userId } = useParams();
    const history = useHistory();
    const handleBack = () => {
        history.push("/usersListOrUser");
    };
    const [user, setUser] = useState(api.users);
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    return (!user.name
        ? <LoadingSpinner/>
        : <>
            <h1>{user.name}</h1>
            <h2>Профессия: {user.profession.name}</h2>
            {user.qualities.map(item => <Quality key={item._id} {...item}/>)}
            <div>completedMeetings: {user.completedMeetings}</div>
            <h2>Rate: {user.rate}</h2>
            <button onClick={() => {
                handleBack();
            }}
            >
                Все пользователи
            </button>
        </>);
};
export default UserPage;
