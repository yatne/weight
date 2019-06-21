import React from 'react';
import PropTypes from 'prop-types';
import style from './button.scss';

const Button = (props) => {
  const {
    onClick,
    children,
  } = props;

  return (
    <button
      className={style.button}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Button;
