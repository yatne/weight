import React from 'react';
import PropTypes from 'prop-types';
import style from './input.scss';

const Input = (props) => {
  const {
    onChange,
    name,
    label,
  } = props;
  return (
    <div className={style.inputContainer}>
      <div className={style.inputLabel}>
        {label || name}
      </div>
      <input
        onChange={(event) => {
          event.preventDefault();
          onChange(event.target.value);
        }}
        className={style.input}
        {...props}
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

