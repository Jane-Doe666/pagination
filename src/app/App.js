import React, { useState } from "react";
import Users from "../components/users";
import api from "../api/index";
import MainTitle from "../components/mainTitle";

// console.log(api.users.fetchAll());

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());
    const usersLength = users.length;

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

    return usersLength > 0
        ? <>
            <MainTitle length={usersLength} />
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
