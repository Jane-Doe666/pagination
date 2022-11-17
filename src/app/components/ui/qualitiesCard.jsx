import React from "react";
import Quality from "./qualities/quality";

const QualitiesCard = ({ user }) => {
    return (
        <div className="card mb-3">
            <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">
                    <span>Qualities</span>
                </h5>
                <p className="card-text">{user.qualities.map(item => <Quality key={item._id} {...item}/>)}</p>
            </div>
        </div>
    );
};

export default QualitiesCard;
