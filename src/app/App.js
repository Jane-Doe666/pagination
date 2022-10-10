/* eslint-disable */
import React, { useEffect, useState } from "react";
import Users from "../components/users";
import api from "../api/index";
import LoadingSpinner from "../components/loadingSpinner";


function App() {
    const [users, setUsers] = useState();
    // const [isLoading, setIsLoading] = useState(false);
    const usersLength = users?.length;

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
        // usersLength === undefined ? setIsLoading(true) : false
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    console.log(users)

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
        : usersLength > 0
            ? <>
                <Users
                    users={users}
                    onToggleBookMark={handleToggleBookMark}
                    onDelete={handleDelete}
                />
            </>
            : <>
                <h1>
                    <span className="badge bg-danger">
                    Никто не тусанет с тобой сегодня
                    </span>
                </h1>
            </>;
}

export default App;
