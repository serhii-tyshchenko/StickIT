import React, { useContext, useState } from 'react';
import './LogInForm.scss';
import { Store } from '../../store';
import { SIGN_IN } from '../../store/action-types';
import db from '../../services/db';

const LogInForm = ({ isVisible, handleClose }) => {
  const initialState = { email: '', password: '' };
  const [state, setState] = useState(initialState);
  const { dispatch } = useContext(Store);

  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await db.login(state.email, state.password);
    if (response.hasOwnProperty('message')) {
      console.log(response.message);
    } else {
      handleClose();
      const { uid, email } = response.user;
      const stickers = await db.getStickers(uid);
      return dispatch({
        type: SIGN_IN,
        payload: { user: { uid, email }, stickers: stickers }
      });
    }
  };

  return (
    isVisible && (
      <div className="modal__background">
        <div className="modal">
          <div className="modal__header">
            <h2 className="modal__title">Log In</h2>
            <div className="modal__controls">
              <button className="modal__close" onClick={handleClose}>
                X
              </button>
            </div>
          </div>
          <div className="modal__content">
            <form action="" className="login-form" onSubmit={handleSubmit}>
              <input
                className="login-form__input"
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={handleChange}
              />
              <input
                className="login-form__input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <button className="login-form__btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export { LogInForm };
