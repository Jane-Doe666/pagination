import React from "react";
import PropTypes from "prop-types";

const SelectField = ({ label, value, onChange, defaultOption, options, error, name }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputClasses = () => {
        return "form-select" + (error ? " is-invalid" : "");
    };
    const optionsArray = !Array.isArray(options) && typeof (options) === "object"
        ? Object.keys(options).map(item =>
            ({ name: options[item].name, id: options[item]._id }))
        : options;

    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select
                className={getInputClasses()}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
            >
                <option value="">
                    {defaultOption}
                </option>
                {optionsArray &&
                    optionsArray.map((option) =>
                        (<option
                            key={option._id + "" + option.name}
                            value={option._id}
                        >
                            {option.name}
                        </option>))
                }
            </select>
            {error && <div className="invalid-feedback">
                {error}
            </div>}
        </div>
    );
};

SelectField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    defaultOption: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    error: PropTypes.string,
    name: PropTypes.string,

};

export default SelectField;
