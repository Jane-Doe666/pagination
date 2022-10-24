import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import { paginate } from "../utils/utilites";
import GroupList from "./groupList";
import api from "../../api";
import MainTitle from "./mainTitle";
import UsersTable from "./usersTable";
import _ from "lodash";
import LoadingSpinner from "./loadingSpinner";

const Users = () => {
    const pageSize = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) =>
                user._id === id
                    ? { ...user, bookmark: !user.bookmark }
                    : { ...user }
            )
        );
    };

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    if (users) {
        const filteredUsers =
            selectedProf
                ? users.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedProf))
                : users;

        const filteredUsersLength = filteredUsers.length;

        const handleSort = (item) => {
            setSortBy(item);
        };

        const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);

        const userCrop = paginate(sortedUsers, currentPage, pageSize);

        const clearFilter = () => {
            setSelectedProf();
        };

        return (<div className="d-flex">
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
                    userCrop={userCrop}
                    onToggleBookMark={handleToggleBookMark}
                    onDelete={handleDelete}
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
    } else { <LoadingSpinner/>; }
};
export default Users;
