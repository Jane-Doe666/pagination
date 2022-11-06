import React from "react";
import UserChangeForm from "../../forms/userChangeForm";

const UserChangePage = ({ userId, edit }) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h3 className="mb-4"></h3>
                    <UserChangeForm userId = {userId} edit={edit}/>
                </div>
            </div>
        </div>
    );
};

export default UserChangePage;
