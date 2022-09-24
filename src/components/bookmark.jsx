import React from "react";

const BookMark = (props) => (
    <button
        className={
            props.bookmark === false
                ? "bi bi-bookmark"
                : "bi bi-bookmark-heart-fill"
        }
        onClick={() => props.onToggleBookMark(props._id)}
    />
);
export default BookMark;
