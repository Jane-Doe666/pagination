/* eslint-disable */
import React from "react";
import { renderPersonLetterEnd } from "./utilites";

const MainTitle = ({ length }) => {
    return length > 0
        ?
        <h2>
            <span
                className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}
            >
                {length + " " + "человек" + renderPersonLetterEnd(length, "", "a") +
                    " " + "тусан" + renderPersonLetterEnd(length, "ет", "ут")} с тобой сегодня
            </span>
        </h2>
        :
        <h1>
            <span className="badge bg-danger">
                Никто не тусанет с тобой сегодня
            </span>
        </h1>

};

export default MainTitle;
