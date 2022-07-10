import React, { useEffect, useState } from "react";

import Question from "../../question/Question";

export default function Quiz({
  data,
  questions,
  currentIndex,
  setCurrentIndex,
  setQuestions,
  score,
  setScore,
}) {
  //console.log("data", questions);
  const [options, setOptions] = useState();

  useEffect(() => {
    setOptions(
      questions.length > 0 &&
        handleShuffle([
          questions[currentIndex]?.correct_answer,
          ...questions[currentIndex]?.incorrect_answers,
        ])
    );
  }, [currentIndex, questions]);

  const handleShuffle = (optionShuffle) => {
    return optionShuffle.sort(() => Math.random() - 0.5);
  };

  return (
    <div>
      {questions.length > 0 ? (
        <Question
          questions={questions}
          correct={questions[currentIndex]?.correct_answer}
          setScore={setScore}
          score={score}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          data={data}
          options={options}
          setOptions={setOptions}
          setQuestions={setQuestions}
        />
      ) : (
        "Loading"
      )}
    </div>
  );
}
