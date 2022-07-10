import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./Question.css";
import Timer from "../timer/Timer";
import ErrorMessage from "../errorMessage/ErrorMessage";
export default function Question({
  questions,
  currentIndex,
  setCurrentIndex,
  options,
  setQuestions,
  correct,
  score,
  setScore,
  //data: { question },
}) {
  console.log(questions);
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [question, setQuestion] = useState({});

  useEffect(() => {
    setQuestion(questions[currentIndex].question);
    //setQuestion(questions[Math.ceil(Math.random() * questions.length)]);
  }, [questions, currentIndex]);

  const navigate = useNavigate();

  const handleSelect = (opt) => {
    if (selected === opt && selected === correct) return "select";
    else if (selected === opt && selected !== correct) return "wrong";
    else if (opt === correct) return "select";
  };

  const handleCheck = (opt) => {
    setSelected(opt);
    if (opt === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currentIndex > 18) {
      navigate("/result");
    } else if (selected) {
      setCurrentIndex(currentIndex + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrentIndex(0);
    setQuestions();
    navigate("/");
  };
  //console.log("test", question);
  return (
    <>
      <div className="card text-center">
        <div className="card-header">
          <span> Question number: {currentIndex + 1} </span>
          <span style={{ float: "right" }}>{<Timer />}</span>
        </div>

        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: "bolder" }}>
            Question:-
            <span dangerouslySetInnerHTML={{ __html: question }}></span>
          </h5>
          <div style={{ margin: "10px" }}>
            <div className="options">
              {error && <ErrorMessage>Please select the option</ErrorMessage>}

              {options &&
                options.map((opt) => (
                  <button
                    type="button"
                    className={`btn btn-outline-secondary options ${
                      selected && handleSelect(opt)
                    }`}
                    onClick={() => handleCheck(opt)}
                    key={opt}
                    disabled={selected}
                  >
                    <span dangerouslySetInnerHTML={{ __html: opt }}></span>
                  </button>
                ))}
            </div>
          </div>
        </div>

        <div className="card-footer text-muted buttons">
          <button className="btn btn-primary" onClick={() => handleNext()}>
            Next
          </button>
        </div>
        <div className="card-footer text-muted buttons">
          <button
            className="btn btn-primary "
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </button>
        </div>
      </div>
    </>
  );
}
