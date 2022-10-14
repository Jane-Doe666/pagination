/* eslint-disable */
import React from "react";

const Caret = ({ order }) => {
    const classCaret = "bi bi-caret-" + (
        order === "asc"
            ? "up-fill"
            : order === "desc"
                ? "down-fill"
                : ""
    );
    return <i className={classCaret}></i>
};

export default Caret;


