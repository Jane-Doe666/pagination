import React from "react";
import UserPage from "../components/page/userPage/userPage";
import UsersListPage from "../components/page/usersListPage/usersListPage";
import { useParams } from "react-router-dom";
import UserEditPage from "../components/page/userChangePage/userEditPage";

const Users = () => {
    const { userId, edit } = useParams();
    return (
        userId
            ? edit
                ? <UserEditPage userId = {userId} edit={edit} />
                : <UserPage userId = {userId}/>
            : <UsersListPage />
    );
};

export default Users;
