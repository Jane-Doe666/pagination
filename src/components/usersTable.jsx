/* eslint-disable */
import React from "react";

import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import BookMark from "./bookmark";

const UsersTable = ({ userCrop, onSort, selectedSort, onToggleBookMark, ...rest })=>{
    console.log('onToggleBookMark',onToggleBookMark)
    console.log('rest usersTable',rest)

    const columns = {
        name:{iter:"name", name:"Имя"},
        qualities:{name:"Качества"},
        profession:{iter:"profession.name", name:"Профессия"},
        completedMeetings:{iter:"completedMeetings", name:"Встретился, раз"},
        rate:{iter:"rate", name:"Оценка"},
        bookmark:{
            iter:"bookmark",
            name:"Избранное",
            component: (props) => (
                <BookMark
                    status={props.bookmark}
                    onClick={()=>onToggleBookMark(props._id)}
            />)
        },
        delete:{component:"delete"}
    }


    return (
    <table className="table">
        <TableHeader {...{onSort, selectedSort, columns}}/>
        <TableBody {...{ columns, data: userCrop }}/>
        {/*<tbody>*/}
        {/*{userCrop.map((user) => (*/}
        {/*        <User key={user._id}*/}
        {/*              {...user}*/}
        {/*              {...rest}*/}
        {/*        />*/}
        {/*    )*/}
        {/*)}*/}
        {/*</tbody>*/}
    </table>
    )
};

UsersTable.propTypes = {
    userCrop: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
}

export default UsersTable