import React, { useState } from 'react';
import './LogInForm.scss';

const LogInForm = ({
  isVisible,
  handleClose,
  handleSignInWithEmail,
  handleSignInWithGoogle
}) => {
  const initialState = { email: '', password: '' };
  const [state, setState] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    handleSignInWithEmail(state.email, state.password);
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
            <hr />
            <button onClick={handleSignInWithGoogle}>Google</button>
          </div>
        </div>
      </div>
    )
  );
};

export { LogInForm };
