import { useState, useCallback } from "react";
import QUESTIONS from "../questions.jsx";
import QuizComplete from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const currentQuestionIndex = userAnswers.length;

  const activeAnswerIndex =
    answerState === "" ? currentQuestionIndex : currentQuestionIndex - 1;

  const QuizIsComplete = currentQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");

      setUserAnswers((prevUserAnswer) => {
        return [...prevUserAnswer, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeAnswerIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeAnswerIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (QuizIsComplete) {
    return (
      <div id="summary">
        <img src={QuizComplete} alt="Trophy" />
        <h2>Quiz Completed ! </h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeAnswerIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />

        <h2>{QUESTIONS[activeAnswerIndex].text}</h2>
        <Answers 
        key={activeAnswerIndex}
        answers={QUESTIONS[activeAnswerIndex].answers}
        selectedAnswer ={userAnswers[userAnswers.length-1]}
        answerState={answerState}
        onSelect={handleSelectAnswer}
        />
      </div>
    </div>
  );
} 