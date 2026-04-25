// import { useState } from "react";

// export default function Player() {
//   const [EnterPlayerName , setEnterPlayerName] = useState(" ");
//   const [Submitted , setSubmitted] = useState(false);

//   function handleChangr(event){
//     setEnterPlayerName(event.target.value)
//   }

//   function handleClick(){
//     setSubmitted(true);
//   }

//   return (
//     <section id="player">
//       <h2>Welcome {Submitted ? EnterPlayerName : "unknown entity" }</h2>
//       <p>
//         <input type="text" onChange={handleChangr} value={EnterPlayerName} />
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }

//Refs 
import { useState , useRef } from "react";

export default function Player() {
  const PlayerName = useRef();
  const [EnterPlayerName , setEnterPlayerName] = useState(null);

  function handleClick(){
    setEnterPlayerName(PlayerName.current.value);
    PlayerName.current.value = " ";
  }

  return (
    <section id="player">
      <h2>Welcome {EnterPlayerName ?? "unknown entity" }</h2>
      <p>
        <input 
        ref = {PlayerName}
        type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
