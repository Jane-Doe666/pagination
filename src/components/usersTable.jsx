/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import BookMark from "./bookmark";
import QualityList from "./qualityList";
import Table from "./table";

const UsersTable = ({ userCrop, onSort, selectedSort, onToggleBookMark, onDelete })=>{

    const columns = {
        name: {iter:"name", name:"Имя"},
        qualities: {
            name:"Качества",
            component: (props) =>  (
                <QualityList
                    qualityes={props.qualities}
                />
            )},
        profession: {iter:"profession.name", name:"Профессия"},
        completedMeetings: {iter:"completedMeetings", name:"Встретился, раз"},
        rate: {iter:"rate", name:"Оценка"},
        bookmark: {
            iter:"bookmark",
            name:"Избранное",
            component: (props) => (
                <BookMark
                    status={props.bookmark}
                    onClick={()=>onToggleBookMark(props._id)}
            />)
        },
        delete: {
            component: (props) => (
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(props._id)}
                >
                    Delete
                </button>
            )
        }
    }

    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={userCrop}
        />
    )
};

UsersTable.propTypes = {
    userCrop: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
}

export default UsersTable;