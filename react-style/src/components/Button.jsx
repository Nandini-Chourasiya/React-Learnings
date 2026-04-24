// import styled from "styled-components";

// export const ButtonStyled = styled.button`
//   padding: 1rem 2rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   border-radius: 6px;
//   color: #1f2937;
//   background-color: #f0b322;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background-color: #f0920e;
//   }
// `;

// export const TextButton = styled.button`
//   background: none;
//   border: none;
//   color: #f0b322;
//   cursor: pointer;
//   font-size: 0.9rem;

//   &:hover {
//     color: #f0920e;
//   }
// `;

//talwind css
export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500"
      {...props}
    >
      {children}
    </button>
  );
}