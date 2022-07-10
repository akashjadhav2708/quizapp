import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Quiz from "./components/pages/quiz/Quiz";
import Result from "./components/pages/result/Result";
import quizdata from "./data/quizdata.json";
//import axios from "axios";
import "./App.css";
// const api_url =
//   "https://opentdb.com/api.php?amount=40&difficulty=easy&type=multiple";

export default function App() {
  const [questions, setQuestions] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  //console.log(questions);
  useEffect(() => {
    // axios
    //   .get(api_url)
    //   .then((response) => response.data)

    //   .then((data) => {
    //     setQuestions(data.results);
    //   });

    setQuestions(quizdata.results);
  }, []);

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <hr />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={<Home questions={questions} />}
          ></Route>

          <Route
            path="/quiz"
            exact
            element={
              <Quiz
                score={score}
                setScore={setScore}
                setCurrentIndex={setCurrentIndex}
                setQuestions={setQuestions}
                currentIndex={currentIndex}
                questions={questions}
                data={currentIndex && questions[currentIndex]}
              />
            }
          ></Route>

          <Route
            path="/result"
            exact
            element={<Result questions={questions} score={score} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
