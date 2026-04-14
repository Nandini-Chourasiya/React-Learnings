

// export default function GameBoard( {onSelectSquare , activePlayerSymbol}){
//    const [gameBoard , setgameBoard] = useState(initialGameBoard);

//      function handleSelectSquare (rowIndex , colIndex) {
//          setgameBoard((previousGameBoard)=>{
//             const updatedGameBoard = previousGameBoard.map((innerArray => [...innerArray]));
//             updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
//             return updatedGameBoard;
//          });
//           onSelectSquare();
//      }


export default function GameBoard( {onSelectSquare , boards}){
  
    return(
       <ol id="game-board">
          {boards.map((row,rowIndex)=>(
            <li key={rowIndex}>
            <ol>
          {row.map((col,colIndex)=>(
            <li key={colIndex}>
            {/* <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{col}</button> */}
            <button onClick={()=>onSelectSquare(rowIndex,colIndex)} 
               disabled={ col !== null}>{col} </button>
          </li>
          ))}
          </ol>
            </li>
          ))}
       </ol>
    );
  }