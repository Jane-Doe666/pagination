import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";

const QualityList = ({ qualityes }) => {
    return <>
        {qualityes.map((qual) => (
            <Quality key={qual._id} {...qual} />
        ))}</>;
};

QualityList.propTypes = {
    qualities: PropTypes.array
};

export default QualityList;
