import React from "react";
import LoadingSpinner from "../common/loadingSpinner";
import { useHistory } from "react-router-dom";

const UserCard = ({ user, userId }) => {
    const history = useHistory();
    const handleEditPage = () => {
        history.push(`/users/${userId}/edit`);
        // history.push(history.location.pathname + "/edit");
    };

    if (user) {
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <div className= "d-flex flex-column align-items-center text-center position-relative">
                        <button className="position-absolute top-0 end-0 btn btn-light btn-sm">
                            <i className="bi bi-gear" onClick={handleEditPage}></i>
                        </button>
                        <img
                            src={`https://avatars.dicebear.com/api/avataaars/${(
                                Math.random() + 1
                            )
                                .toString(36)
                                .substring(7)}.svg`}
                            className="rounded-circle shadow-1-strong me-3"
                            alt="avatar"
                            width="150"
                            height="150"
                        />
                        <div className="mt-3">
                            <h4>{user.name}</h4>
                            <p className="text-secondary mb-1">Профессия: {user.profession.name}</p>
                            <div className="text-muted">
                                <i className="bi bi-caret-down-fill text-primary" role="button"></i>
                                <i className="bi bi-caret-up-fill text-secondary" role="button"></i>
                            </div>
                            <span className="ms-2">Rate: {user.rate}</span>
                        </div>
                    </div>
                </div>
            </div>);
    } else {
        <LoadingSpinner/>;
    }
};

export default UserCard;
