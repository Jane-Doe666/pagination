import React from "react";
import NavBar from "./components/navbar";
import { Route } from "react-router-dom";
import Login from "./layout/login";
import Menu from "./layout/menu";
import UsersOrUser from "./layout/usersOrUser";

function App () {
    return <>
        <NavBar/>
        <Route exact path="/" component={Menu}/>
        <Route path="/login" component={Login}/>
        <Route path="/usersListOrUser/:userId?" component={UsersOrUser}/>
    </>;
}

export default App;
