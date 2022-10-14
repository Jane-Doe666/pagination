import React from "react";

const BookMark = (props) => {
    return <button
        className={
            props.status === false
                ? "bi bi-bookmark"
                : "bi bi-bookmark-heart-fill"
        }
        onClick={props.onClick}

    />;
};

export default BookMark;
