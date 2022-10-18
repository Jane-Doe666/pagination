import React from "react";
import Users from "../components/users";
import NavBar from "../components/navbar";
import { Route } from "react-router-dom";
import Login from "../components/login";
import Menu from "../components/menu";
import Userpage from "../components/userpage";

function App () {
    return <>
        <NavBar/>
        <Route path="/menu" component={Menu}/>
        <Route path="/login" component={Login}/>
        <Route path="/user/:userId?" component={Userpage} />
        <Route path="/users" component={Users}/>
    </>;
}

export default App;

// 14 ? w/o Userpage dissapere *
