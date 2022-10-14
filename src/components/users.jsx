/* eslint-disable */
import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import { paginate } from "./utilites";
import GroupList from "./groupList";
import api from "../api/index";
import MainTitle from "../components/mainTitle";
import UsersTable from "./usersTable";
import _ from "lodash";

const Users = ({ users, ...rest }) => {
    const pageSize = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions] = useState(api.professions);
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({iter:"name", order:"asc"})

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const filteredUsers =
        selectedProf
            ? users.filter((user) => user.profession._id === selectedProf._id)
            : users;
    const filteredUsersLength = filteredUsers.length;

    const handleSort = (item)=> {
        setSortBy(item);
    };

    const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order])

    const userCrop = paginate(sortedUsers, currentPage, pageSize);

    const clearFilter = () => {
        setSelectedProf();
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        Очистить все
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
                <MainTitle length={filteredUsersLength}/>
                <UsersTable
                    userCrop={userCrop}{...rest}
                    onSort={handleSort}
                    selectedSort={sortBy}
                />
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={filteredUsersLength}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};
export default Users;
