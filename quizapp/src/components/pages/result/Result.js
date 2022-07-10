import React, { useState } from "react";
import "./Result.css";
function Result({ score, questions, selected }) {
  //console.log(questions);
  const [display, setDisplay] = useState(false);
  function percentage(score) {
    return Math.floor((score * 100) / 20);
  }
  let Actual_prcentage = percentage(score);

  const DisplayHandler = () => {
    setDisplay(true);
  };
  return (
    <div>
      <div
        className="card text-bg-success mb-2 center "
        style={{ maxWidth: "33rem" }}
      >
        <div
          className="card-header"
          style={{ backgroundColor: "lightsteelblue" }}
        >
          <h6 className="display-6">Result</h6>
        </div>

        <div className="card-body" style={{ backgroundColor: "limegreen" }}>
          <div style={{ position: "absolute", left: "60px" }}>
            <img
              src="https://img.icons8.com/fluency/60/undefined/trophy.png"
              alt="trophy"
            />
          </div>

          <h5 className="card-title score">
            Your score is :- {score} out of 20
          </h5>
          <h5 className="card-title score">
            <p>
              <h5>Your Percentage :- {Actual_prcentage}%</h5>
            </p>
          </h5>
        </div>
      </div>

      <div className="card-footer text-muted buttons">
        <button
          className="btn btn-primary score "
          onClick={() => DisplayHandler()}
        >
          Check Answers
        </button>
        {display === true ? (
          <section className="modal-card-body content">
            <ul>
              {questions.map((result, i) => (
                <li key={i} className="mb-6">
                  <p style={{ color: "bisque" }}>
                    <strong>
                      <span
                        dangerouslySetInnerHTML={{ __html: result.question }}
                      ></span>
                    </strong>
                  </p>
                  <p
                    className="has-background-success has-text-white p-2"
                    style={{ color: "Green" }}
                  >
                    Correct Answer:-
                    <span
                      dangerouslySetInnerHTML={{
                        __html: result.correct_answer,
                      }}
                    ></span>
                  </p>
                  <p
                    className="has-background-danger has-text-white p-2"
                    style={{ color: "Red" }}
                  >
                    Incorrect Answers :-
                    <ul>
                      <li>{result.incorrect_answers[0]}</li>
                      <li>{result.incorrect_answers[1]}</li>
                      <li>{result.incorrect_answers[2]}</li>
                    </ul>
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </div>
  );
}
export default Result;
