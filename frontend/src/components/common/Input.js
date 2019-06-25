import React from 'react';
import PropTypes from 'prop-types';
import style from './input.scss';

const Input = (props) => {
  const {
    onChange,
    value,
    name,
    label,
    type,
    step,
    disabled,
  } = props;
  return (
    <div className={style.inputContainer}>
      <div className={style.inputLabel}>
        {label || name}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(event) => {
          event.preventDefault();
          onChange(event.target.value);
        }}
        className={style.input}
        step={step}
        disabled={disabled}
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
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  label: null,
  type: null,
  step: '',
  disabled: false,
};

export const DateInput = props => (<Input type="date" {...props} />);
export const NumInput = props => (<Input type="number" {...props} />);

