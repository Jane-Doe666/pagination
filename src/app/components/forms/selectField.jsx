import React from "react";

const SelectField = ({ label, value, onChange, defaultOption, options, error }) => {
    console.log(222, error);
    const getInputClasses = () => {
        return "form-select" + (error ? " is-invalid" : "");
    };
    const optionsArray = !Array.isArray(options) && typeof (options) === "object"
        ? Object.keys(options).map(item =>
            ({ name: options[item].name, id: options[item]._id })) // name:item
        : options;

    return (
        <div className="mb-4">
            <label htmlFor="validationCustom04" className="form-label">
                {label}
            </label>
            <select
                className={getInputClasses()}
                id="validationCustom04"
                name="profession"
                value={value}
                onChange={onChange}
            >
                <option value="">
                    {defaultOption}
                </option>
                {
                    optionsArray && optionsArray.map(option =>
                        <option
                            key={option._id}
                            value={option._id}
                        >
                            {option.name}
                        </option>)
                }
            </select>
            {error && <div className="invalid-feedback">
                {error}
            </div>}
        </div>
    );
};

export default SelectField;
