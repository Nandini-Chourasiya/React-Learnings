import { useRef, useState } from "react";

export default function Login() {

  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const email = useRef();
  const password = useRef();

  function handleClick(event) {
    event.preventDefault();

    const emailEntered = email.current.value;
    const passwordEntered = password.current.value;

    const emailIsValid = emailEntered.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);

    console.log(emailEntered, passwordEntered);
  }

  return (
    <form onSubmit={handleClick}>
      <h2>Login</h2>

      <div className="control-row">

        <div className="control no-margin">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            name="email"
            ref={email}
          />

          <div className="control-error">
            {emailIsInvalid && (
              <p>Enter correct email</p>
            )}
          </div>
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
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}