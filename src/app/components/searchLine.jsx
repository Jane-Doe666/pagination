import React from "react";

const SearchLine = ({ value, onChange }) => {
    return (
        <nav className="navbar bg-light">
            <form className="container-fluid">
                <div className="input-group">
                    <input
                        value={value}
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={onChange}
                    />
                </div>
            </form>
        </nav>
    );
};

export default SearchLine;
