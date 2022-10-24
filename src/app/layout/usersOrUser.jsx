import React from "react";
import UserPage from "../components/userPage";
import Users from "../components/users";
import { useParams } from "react-router-dom";

const UsersOrUser = () => {
    const { userId } = useParams();

    return (
        userId
            ? <UserPage userId = {userId}/>
            : <Users />
    );
};

export default UsersOrUser;
