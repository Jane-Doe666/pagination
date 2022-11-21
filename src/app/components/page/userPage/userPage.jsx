import React, { useState, useEffect } from "react";
import api from "../../../../api";
import LoadingSpinner from "../../common/loadingSpinner";
import UserCard from "../../ui/userCard";
import QualitiesCard from "../../ui/qualitiesCard";
import MeetingsCard from "../../ui/meetingsCard";
import Comments from "../../common/comments/comments";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    if (user) {
        return (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard userId={userId} user={user}/>
                        <QualitiesCard user={user}/>
                        <MeetingsCard user={user}/>
                    </div>
                    <div className="col-md-8">
                        <Comments/>
                    </div>
                </div>
            </div>
        );
    } else {
        return <LoadingSpinner/>;
    };
};
export default UserPage;
