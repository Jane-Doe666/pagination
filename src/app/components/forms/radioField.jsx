import React from "react";

const RadioField = ({ options, name, value, onChange, label }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (<>
        <div className="mb-4">
            <label className="form-label">
                {label}
            </label>
            <div>
                {options.map((option) => (
                    <div key={option.value} className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name={name}
                            id={option.value}
                            value={option.value}
                            checked={option.value === value}
                            onChange={handleChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={option._id}
                        >
                            {option.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    </>);
};

export default RadioField;
