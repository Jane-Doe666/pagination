import React from "react";
import Main from "../components/main";
import { Route, Link } from "react-router-dom";

const Menu = () => {
    return (<>
        <div className="menufirst">*** Menu ***</div>
        <Link to="/menu/main" className="menufirstmain">Main</Link>
        <Route path="/menu/main" component={Main}/>
    </>
    );
};

export default Menu;
