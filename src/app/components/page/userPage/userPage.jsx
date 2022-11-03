/* eslint-disable */

import React, { useState, useEffect } from "react";
import { Link, Route, useHistory, useParams } from "react-router-dom";
import api from "../../../../api";
import LoadingSpinner from "../../common/loadingSpinner";
import Quality from "../../ui/qualities/quality";
import UserChangePage from "../userChangePage/userChangePage";
import quality from "../../ui/qualities/quality";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState({});
    // const { edit } = useParams();
    // const [editPage, setEditPage] = useState(edit === false);

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    // const handleEdit = () => {
    //     setEditPage(prevState => prevState === false);
    // };
    // console.log(user);

    // const { edit } = useParams();
    // const [editPage, setEditPage] = useState(edit === "false");
    const { profession } = user;

    const { qualities } = user;
    console.log(1, { ...profession });
    console.log(2, qualities);

    const history = useHistory();
    const handleBack = () => {
        history.push(`/usersListOrUser/${userId}/edit`);
        // setEditPage(true);
    };

    // useEffect(() => {
    //
    // }, [edit]);

    return (
        <>
            <h1>{user.name}</h1>
            {/* <h2>Профессия: {profession.name}</h2> */}
            {/* {Object.keys(user).map((item) => return */}
            {/*    (<div key={item.qualities._id}>{item.qualities.name}<div/>)} */}
            <div>completedMeetings: {user.completedMeetings}</div>
            <h2>Rate: {user.rate}</h2>
            <button onClick={handleBack}>Изменить</button>
            {/* {editPage && <UserChangePage/>} */}
        </>
    );
};
export default UserPage;
