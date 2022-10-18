import React from "react";
import { useParams } from "react-router-dom";

const Userpage = () => {
    const { userId } = useParams();
    console.log(userId);
    return <>
        <h1>userName</h1>
        <h2>userProf</h2>
        <h2>userQ</h2>
        <h2>meeting</h2>
        <h2>rate</h2>
        <button>Все пользователи</button>
    </>;
};

export default Userpage;
