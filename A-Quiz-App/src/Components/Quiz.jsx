import { useState, useCallback } from "react";
import QUESTIONS from "../questions.jsx";
import Summary from "./Summary.jsx";
import Questions from "./Questions.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestionIndex = userAnswers.length;
  const QuizIsComplete = currentQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (QuizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Questions
        key={currentQuestionIndex}
        index={currentQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}