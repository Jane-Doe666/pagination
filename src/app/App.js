import React from "react";
import NavBar from "./components/navbar";
import { Route } from "react-router-dom";
import Login from "./layout/login";
import Menu from "./layout/menu";
import UserOrUsers from "./components/userOrusers";

function App () {
    return <>
        <NavBar/>
        <Route path="/menu" component={Menu}/>
        <Route path="/login" component={Login}/>
        <Route path="/usersListOrUser/:userId?" component={UserOrUsers}/>
    </>;
}

export default App;
