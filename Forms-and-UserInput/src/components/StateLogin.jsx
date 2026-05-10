// import { useState } from "react";
// import Input from "./Input";
// import { isEmail , isNotEmpty , hasMinLength } from "../util/validation";

// export default function Login() {
//   const [enteredValues , setEnteredValues] = useState({
//     email : "",
//     password : ""
//   });
  
//   const[didEdit , setDidEdit] = useState({
//     email : false,
//     password : false
//   });
  
//   const emailIsValid = 
//   didEdit.email && 
//   !isEmail(enteredValues.email) && 
//   !isNotEmpty(enteredValues.email); 

//   const passwordIsValid = 
//   didEdit.password && !hasMinLength(enteredValues.password , 6);
  
//   function handleClick(event){
//     event.preventDefault();
//     console.log(enteredValues);
//   }
  
//   function handleInputChange(Identifier , value){
//     setEnteredValues( (prevValue) => ({
//       ...prevValue,
//       [Identifier] : value
//     }));
//     setDidEdit( (preVal) => ({
//       ...preVal,
//       [Identifier] : false
//     }))
//   }

//   function handleInputBlur(identifier){
//     setDidEdit( preVal => ({
//       ...preVal,
//       [identifier] : true
//     }));
//   }

//   return (
//     <form onSubmit={handleClick}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <Input 
//          label="Email"
//          id="email"
//          type="email"
//          name="email"
//          onBlur={ () => handleInputBlur("email")}
//          onChange={ (event) => handleInputChange( "email" , event.target.value) }
//          value={enteredValues.email}
//          error={emailIsValid && "Please enter correct email"}
//         />
//         <Input 
//          label="Password"
//          id="password"
//          type="password"
//          name="password"
//          onBlur={ () => handleInputBlur("password")}
//          onChange={ (event) => handleInputChange( "password" , event.target.value) }
//          value={enteredValues.password}
//          error={passwordIsValid && "Password length must be greater than 6"}
//         />
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat">Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }

import Input from "./Input";
import { isEmail , isNotEmpty , hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
      value : emailValue,
      handleInputBlur : handleEmailBlur ,
      handleInputChange : handleEmailChange,
      hasError : emailHasError
   } = useInput("",(value) => isEmail(value) && isNotEmpty(value));

   const {
      value : passwordValue,
      handleInputBlur : handlePasswordBlur ,
      handleInputChange : handlePasswordChange,
      hasError : passwordHasError
   } = useInput("",(value) => hasMinLength(value,6));
  
  function handleClick(event){
    event.preventDefault();

    if( passwordHasError || emailHasError){
      return;
    }
    console.log(enteredValues);
  }

  return (
    <form onSubmit={handleClick}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
         label="Email"
         id="email"
         type="email"
         name="email"
         onBlur={handleEmailBlur}
         onChange={handleEmailChange}
         value={emailValue}
         error={emailHasError && "Please enter correct email"}
        />
        <Input 
         label="Password"
         id="password"
         type="password"
         name="password"
         onBlur={ handlePasswordBlur}
         onChange={handlePasswordChange}
         value={passwordValue}
         error={passwordHasError && "Password length must be greater than 6"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
