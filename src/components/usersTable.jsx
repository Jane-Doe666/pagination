/* eslint-disable */
import React from "react";
import User from "./user";
import PropTypes from "prop-types";

const UsersTable = ({ userCrop, onSort, currentSort, ...rest })=>{

    const handleSort = (item) => {
        if(currentSort.iter===item) {
            onSort({
                ...currentSort,
                order:currentSort.order==="asc"? "desc":"asc"
            });
        } else {
            onSort({ iter:item, order:"asc" })
        }
    }
    return (
    <table className="table">
        <thead>
        <tr>
            <th onClick={()=>handleSort("name")}>Имя</th>
            <th>Качества</th>
            <th onClick={()=>handleSort("profession.name")}>Профессия</th>
            <th onClick={()=>handleSort("completedMeetings")}>Встретился, раз</th>
            <th onClick={()=>handleSort("rate")}>Оценка</th>
            <th onClick={()=>handleSort("bookmark")}>Избранное</th>
            <th/>
        </tr>
        </thead>
        <tbody>
        {userCrop.map((user) => (
                <User key={user._id}
                      {...user}
                      {...rest}
                />
            )
        )}
        </tbody>
    </table>
    )
};

UsersTable.propTypes = {
    userCrop: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired
}

export default UsersTable