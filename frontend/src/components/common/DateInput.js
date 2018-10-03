import React from 'react';
import PropTypes from 'prop-types';

const DateInput = (props) => {
  const {
    onChange,
    value,
    name,
    label,
  } = props;
  return (
    <div className="dateInputContainer">
      <div className="dateInputLabel">
        {label || name}
      </div>
      <input
        type="text"
        name={name}
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
};

DateInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

DateInput.defaultProps = {
  label: null,
};

export default DateInput;
