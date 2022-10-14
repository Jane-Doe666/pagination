import React, { useEffect, useState } from "react";
import Users from "../components/users";
import api from "../api/index";
import LoadingSpinner from "../components/loadingSpinner";

function App () {
    const [users, setUsers] = useState();
    const usersLength = users?.length;

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) =>
                user._id === id
                    ? { ...user, bookmark: !user.bookmark }
                    : { ...user }
            )
        );
    };

    return usersLength === undefined
        ? <LoadingSpinner/>
        : <>
            <Users
                users={users}
                onToggleBookMark={handleToggleBookMark}
                onDelete={handleDelete}
            />
        </>;
}

export default App;
