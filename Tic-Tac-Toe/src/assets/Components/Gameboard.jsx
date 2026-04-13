import { useState } from "react";

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

export default function GameBoard( {onSelectSquare}){
   const [gameBoard , setgameBoard] = useState(initialGameBoard);

     function handleSelectSquare (rowIndex , colIndex) {
         setgameBoard((previousGameBoard)=>{
            const updatedGameBoard = previousGameBoard.map((innerArray => [...innerArray]));
            updatedGameBoard[rowIndex][colIndex] = "X";
            return updatedGameBoard;

         });
          onSelectSquare();
     }

    return(
       <ol id="game-board">
          {gameBoard.map((row,rowIndex)=>(
            <li key={rowIndex}>
            <ol>
          {row.map((col,colIndex)=>(
            <li key={colIndex}>
            <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{col}</button>
          </li>
          ))}
          </ol>
            </li>
          ))}
       </ol>
    );
}