import React from "react";
import UserPage from "../components/page/userPage/userPage";
import UsersListPage from "../components/page/usersListPage/usersListPage";
import { useParams } from "react-router-dom";
import UserChangePage from "../components/page/userChangePage/userChangePage";

const Users = () => {
    const { userId, edit } = useParams();
    return (
        userId
            ? edit
                ? <UserChangePage userId = {userId} edit={edit} />
                : <UserPage userId = {userId}/>
            : <UsersListPage />
    );
};

export default Users;
