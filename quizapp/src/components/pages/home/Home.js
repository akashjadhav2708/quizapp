import React from "react";
import { useNavigate } from "react-router";
import "./Home.css";
export default function Home() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
  };
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="display-5 Information ">Information about quiz</h5>
        </div>
        <div className="card-body QuizInformation ">
          <h5 className="card-title"> • Quiz has 20 questions .</h5>
          <h5 className="card-title"> • Total time for quiz is 20 minute. </h5>
          <h5 className="card-title">
            • There are four options from which you have to choose one if not it
            will show error.
          </h5>
          <h5 className="card-title">
            • After Time is Exhausted your test get submitted automatically .
          </h5>
          <h5 className="display-5 Information ">Good Luck !</h5>
          <button className="btn btn-primary " onClick={startQuiz}>
            Start Quiz
          </button>
        </div>
      </div>
    </>
  );
}
