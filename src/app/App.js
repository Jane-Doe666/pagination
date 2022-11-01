import React from "react";
import NavBar from "./components/ui/navbar";
import { Route } from "react-router-dom";
import Login from "./layout/login";
import Menu from "./layout/menu";
import Users from "./layout/users";

function App () {
    return <>
        <NavBar/>
        <Route exact path="/" component={Menu}/>
        <Route path="/login/:type?" component={Login}/>
        <Route path="/usersListOrUser/:userId?" component={Users}/>
    </>;
}

export default App;
