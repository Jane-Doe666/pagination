/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.iter === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ iter: item, order: "asc" })
        }
    };

    return (
        <thead>
        <tr>
            {Object.keys(columns).map((column) => (
                <th
                    key={column}
                    onClick={
                        columns[column].iter
                            ? () => handleSort(columns[column].iter)
                            : undefined
                    }
                    {...{role: columns[column].iter && "button" }}
                >
                    {columns[column].name}
                </th>
            ))}
            {/*<th>Качества</th>*/}
            {/*<th onClick={() => handleSort("profession.name")}>Профессия</th>*/}
            {/*<th onClick={() => handleSort("completedMeetings")}>Встретился, раз</th>*/}
            {/*<th onClick={() => handleSort("rate")}>Оценка</th>*/}
            {/*<th onClick={() => handleSort("bookmark")}>Избранное</th>*/}
            {/*<th/>*/}
        </tr>
        </thead>)
};

TableHeader.prototype = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired

}

export default TableHeader;