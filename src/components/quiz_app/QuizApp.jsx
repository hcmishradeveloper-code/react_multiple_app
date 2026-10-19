import React, { useState } from "react";
import { Link } from "react-router-dom";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correct: "Paris",
  },
  {
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    correct: "Berlin",
  },
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Pune", "Chennai", "New Delhi"],
    correct: "New Delhi",
  },
];

function QuizApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];

  const submitHandler = () => {
    if (!selectedAnswer) {
      alert("Please select the correct option.");
      return;
    }
    if (selectedAnswer === currentQuestion.correct) {
      setFeedback("✅ Correct!");
      setScore((prev) => prev + 1);
    } else {
      setFeedback("❌ Wrong!");
    }

    setTimeout(() => {
      setFeedback("");
      setSelectedAnswer("");
      setCurrentIndex((prev) => prev + 1);
    }, 1000);
  };

  if (currentIndex >= questions.length) {
    return (
      <>
        <div
          style={{
            border: "1px solid black",
            width: 300,
            margin: "auto",
            padding: "20px 40px",
            borderRadius: "12px",
            marginTop:"2rem",
          }}
        >
          <h3>Quiz Completed 🌹🎉</h3>
          <h4>Your final score </h4>
          <h4>
            Score: {score} /{questions.length}
          </h4>
          <Link className="link_click" to="/">Back to home</Link>
        </div>
      </>
    );
  }

  return (
    <div 
    style={{
            border: "1px solid black",
            width: 350,
            margin: "auto",
            padding: "20px 40px",
            margintTop:"20px",
            borderRadius: "12px",
            marginTop:"2rem",
          }} 
          >
      <h3>
        <i>
          {currentIndex + 1}. {currentQuestion.question}
        </i>
      </h3>
      {currentQuestion.options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            name="answer"
            value={option}
            checked={selectedAnswer === option}
            onChange={(e) => setSelectedAnswer(e.target.value)}
          />
          <span>{option}</span>
        </div>
      ))}
      <div style={{ paddingLeft: "10px" }}>
        <button
          onClick={submitHandler}
          style={{ marginTop: "5px", padding: "2px 6px", cursor: "pointer" }}
        >
          Submit
        </button>
      </div>
      <div style={{ padding: "10px" }}>{feedback}</div>
      <Link className="link_click" to="/">Back to home</Link>
    </div>
  );
}
export default QuizApp;