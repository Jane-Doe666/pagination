import React from "react";
import PropTypes from "prop-types";

const SelectField = ({ label, value, onChange, defaultOption, options, error, name }) => {
    console.log(3, "options", options);
    console.log(4, "value", value);

    const getInputClasses = () => {
        return "form-select" + (error ? " is-invalid" : "");
    };

    const optionsArray = !Array.isArray(options) && typeof (options) === "object"
        ? Object.keys(options).map(item =>
            ({ name: options[item].name, value: options[item]._id }))
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
                onChange = {({ target }) => { onChange({ name: target.name, value: target.value }); }}
            >
                <option value="">
                    {defaultOption}
                </option>
                {optionsArray &&
                    optionsArray.map((option) => (
                        <option value={option.value} key={option.name + "_" + option.value}
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
