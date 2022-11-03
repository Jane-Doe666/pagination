import React from "react";
import UserChangeForm from "../../forms/userChangeForm";

const UserChangePage = () => {
    return (<>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h3 className="mb-4"></h3>
                    <UserChangeForm/>
                </div>
            </div>
        </div>
    </>);
};

export default UserChangePage;
