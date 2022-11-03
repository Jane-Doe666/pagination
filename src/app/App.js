import React from "react";
import NavBar from "./components/ui/navbar";
import { Route } from "react-router-dom";
import Login from "./layout/login";
import Menu from "./layout/menu";
import Users from "./layout/users";
import UserChangePage from "../app/components/page/userChangePage/userChangePage";

function App () {
    return <>
        <NavBar/>
        <Route exact path="/" component={Menu}/>
        <Route path="/login/:type?" component={Login}/>
        <Route exact path="/users/:userId/edit" component={UserChangePage}/>
        <Route exact path="/users/:userId?" component={Users}/>
    </>;
}

export default App;
