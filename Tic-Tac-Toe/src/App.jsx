import { useState } from "react";
import Player from "./assets/Components/Player";
import GameBoard from "./assets/Components/Gameboard";

function App() {
  const[activePLayer , setActivePlayer] = useState("X");

  function handleSelectSquare(){
      setActivePlayer((currActivePlayer) => currActivePlayer === "X" ? "O" : "X");
  }

  return (
    <main>
      
      <header id="game-header">
        <img src="/game-logo.png" alt="Game Logo" />
        <h1>Tic-Tac-Toe</h1>
      </header>

      <div id="game-container">
        <ol id="players">
          <Player initialName="Player1" symbol="X" />
          <Player initialName="Player2" symbol="O" />
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} />
      </div>
    </main>
  );
}

export default App;