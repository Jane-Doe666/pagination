import React from "react";
import UserPage from "./userPage";
import Users from "../layout/users";
import { useParams } from "react-router-dom";

const UsersOrUser = () => {
    const { userId } = useParams();

    return (
        userId
            ? <UserPage userId = {userId}/>
            : <Users userId = {userId}/>
    );
};

export default UsersOrUser;
