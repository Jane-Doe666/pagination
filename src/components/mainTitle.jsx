import React from "react";
import { renderPersonLetterEnd } from "./utilites";

const MainTitle = ({ length }) => {
    return (
        <h2>
            <span
                className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}
            >
                {length + " " + "человек" + renderPersonLetterEnd(length, "", "a") +
                    " " + "тусан" + renderPersonLetterEnd(length, "ет", "ут")} с тобой сегодня
            </span>
        </h2>
    );
};

export default MainTitle;
