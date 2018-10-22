import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    onChange,
    value,
    name,
    label,
    type,
    step,
  } = props;
  return (
    <div className="inputContainer">
      <div className="inputLabel">
        {label || name}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={event => onChange(event.target.value)}
        className="input"
        step={step}
      />
    </div>
  );
};


Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  step: PropTypes.string,
};

Input.defaultProps = {
  label: null,
  type: null,
  step: '',
};

export const DateInput = props => (<Input type="date" {...props} />);
export const NumInput = props => (<Input type="number" {...props} />);

