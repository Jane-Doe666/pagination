import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const MultiSelect = ({ options, onChange, name, label, defaultValue }) => {
    const arrayQality =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                label: options[optionName].name,
                value: options[optionName]._id
            }))
            : options;

    return (
        <div className="mb-4">
            <label htmlFor="validationCustom04" className="form-label">
                {label}
            </label>
            <Select
                closeMenuOnSelect={false}
                isMulti
                defaultValue={defaultValue}
                options={arrayQality}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={onChange}
                name={name}
            />
        </div>
    );
};

MultiSelect.propTypes = {
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
};
export default MultiSelect;
