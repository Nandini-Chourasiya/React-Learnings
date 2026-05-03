import { useState } from "react";
import QUESTIONS from "../questions.jsx"
import QuizComplete from "../assets/quiz-complete.png"
import QuestionTimer from "./QuestionTimer.jsx";
import { useCallback } from "react";

export default function Quiz(){
   const [userAnswers , setUserAnswers] = useState([]);
   const activeAnswerIndex = userAnswers.length;
   
   const QuizIsComplete = activeAnswerIndex === QUESTIONS.length;
 
  const handelSelectAnswer = useCallback( function handelSelectAnswer(selectedAnswer){
         setUserAnswers( (prevUserAnswer) => {
            return [...prevUserAnswer , selectedAnswer];
         });
  },[]);

  const handleSkipAnswer = useCallback (() => handelSelectAnswer(null),[handelSelectAnswer])
  
  if( QuizIsComplete ){
    return (
      <div id="summary">
        <img src={QuizComplete} alt="Trophy"/>
        <h2>Quiz Completed ! </h2>
      </div>
    );
  }

   const shuffledAnswer = [ ...QUESTIONS[activeAnswerIndex].answers];
   shuffledAnswer.sort( () => Math.random - 0.5);

   return (
    <div id="quiz">
     <div id="question">
      <QuestionTimer 
        timeout={10000} 
        onTimeout={handleSkipAnswer}
      />
        <h2> {QUESTIONS[activeAnswerIndex].text} </h2>
        <ul id="answers">
          {shuffledAnswer.map( (answers) => (
            <li key={answers} className="answer">
                <button onClick={() => handelSelectAnswer(answers)}>{answers}</button>
            </li>
          ))}
        </ul>
     </div>
     </div>
   );
}