import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
<<<<<<< HEAD

const TextInputGroup = () => {
  label, name, value, placeholder, type, onChange, error;

=======

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
>>>>>>> 8169a261b3a7cc9f600e29009b76a984b5e33f8f
  return (
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input
        type={type}
<<<<<<< HEAD
        name="name"
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        className="form-control form-control-lg"
        placeholder="Enter Name..."
        value={name}
        onChange={this.onChange}
=======
        name={name}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
>>>>>>> 8169a261b3a7cc9f600e29009b76a984b5e33f8f
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
<<<<<<< HEAD
  error: PropTypes.string.isRequired
=======
  error: PropTypes.string
>>>>>>> 8169a261b3a7cc9f600e29009b76a984b5e33f8f
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
