import React from 'react';
import PropTypes from 'prop-types';
import style from './passwordPopup.scss';

class PasswordPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  submitPassword(e) {
    e.preventDefault();
    window.sessionStorage.setItem('password', this.state.password);
    this.props.onClose();
  }

  changePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className={style.blende}>
        <div className={style.popup}>
          <form onSubmit={e => this.submitPassword(e)}>
            <span>Podaj hasło: </span>
            <input
              className={style.input}
              type="password"
              value={this.state.password}
              onChange={e => this.changePassword(e)}
            />
            <button type="submit"> OK </button>
          </form>
        </div>
      </div>
    );
  }
}

PasswordPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PasswordPopup;
