import { useRef, useState } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  function handleClick(event){
    event.preventDefault();
    const emailEntered = email.current.value;
    const passwordEnttered = password.current.value;

    console.log(emailEntered,passwordEnttered);
  }
  
  function handleInputChange(Identifier , value){
    setEnteredValues( (prevValue) => ({
      ...prevValue,
      [Identifier] : value
    }));
  }

  return (
    <form onSubmit={handleClick}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" 
              type="email" 
              name="email" 
              ref={email}
            />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
              id="password" 
              type="password" 
              name="password" 
              ref={password}
            />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
