import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, id, name, onChange, value, type, error }) => {
    return (<div className="row mb-3">
        <label>{label}
            <input
                placeholder={label}
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />
        </label>
        {error && <p>{error}</p>}
    </div>
    );
};

TextField.defaultProps = {
    type: "text"
};

TextField.prototype = {
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextField;
