// import { useState } from 'react';
// import styled from "styled-components";
// import { ButtonStyled, TextButton } from './Button';
// import CustomInput from './Input';

// /* ---------- Styled Components ---------- */

// const ControlDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `;

// /* ---------- Component ---------- */

// export default function AuthInputs() {
//   const [enteredEmail, setEnteredEmail] = useState('');
//   const [enteredPassword, setEnteredPassword] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   function handleInputChange(identifier, value) {
//     if (identifier === 'email') setEnteredEmail(value);
//     else setEnteredPassword(value);
//   }

//   function handleLogin() {
//     setSubmitted(true);
//   }

//   const emailNotValid =
//     submitted && !enteredEmail.includes('@');
//   const passwordNotValid =
//     submitted && enteredPassword.trim().length < 6;

//   return (
//     <div id="auth-inputs">
//       <ControlDiv>
//         {/* <div> */}
//           {/* <Label $invalid={emailNotValid}>Email</Label> */}
//           <Input
//             label ="Email"
//             invalid={emailNotValid}
//             type="email"
//             $invalid={emailNotValid}
//             value={enteredEmail}
//             onChange={(e) =>
//               handleInputChange('email', e.target.value)
//             }
//           />
//         {/* </div> */}

//         {/* <div> */}
//           {/* <Label $invalid={passwordNotValid}>Password</Label> */}
//           <Input
//             label ="password"
//             invalid={passwordNotValid}
//             type="password"
//             $invalid={passwordNotValid}
//             value={enteredPassword}
//             onChange={(e) =>
//               handleInputChange('password', e.target.value)
//             }
//           />
//         {/* </div> */}
//       </ControlDiv>

//       <div style={{ display: "flex", gap: "1rem" }}>
//         <TextButton type="button">
//           Create a new account
//         </TextButton>

//         <ButtonStyled onClick={handleLogin}>
//           Sign In
//         </ButtonStyled>
//       </div>
//     </div>
//   );
// }

//talwing css
import Input from './Input';
import { useState } from 'react';
import styled from "styled-components";
import Button from './Button';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') setEnteredEmail(value);
    else setEnteredPassword(value);
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid =
    submitted && !enteredEmail.includes('@');

  const passwordNotValid =
    submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-800'>
      <div className='flex flex-col gap-2 mb-6'>
        <Input
          label="Email"
          invalid={emailNotValid}
          type="email"
          value={enteredEmail}
          onChange={(e) =>
            handleInputChange('email', e.target.value)
          }
        />

        <Input
          label="Password"
          invalid={passwordNotValid}
          type="password"
          value={enteredPassword}
          onChange={(e) =>
            handleInputChange('password', e.target.value)
          }
        />
      </div>
      <div className='flex justify-end gap-4'>
        <Button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </Button>

        <Button onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}