import React from 'react'
import { Link } from "react-router-dom";
function ReportPage({ questions, answers, userEmail }) {
  const calculateScore = () => {
    let score = 0
    questions.forEach((question, index) => {
      if (answers[index] === question.correct_answer) {
        score++
      }
    })
    return score
  }

  const score = calculateScore()

  return (
    <div className="report-page">
      <h1>Quiz Report</h1>
      
      <div className="report-summary">
        <h2>Email: {userEmail}</h2>
        <h2>Score: {score} out of {questions.length}</h2>
        <p>Percentage: {((score / questions.length) * 100).toFixed(1)}%</p>
        <button className="button-style">
          <Link to="/" className="link-style">
            Re-Attempt
          </Link>
        </button>
      </div>
      
      {questions.map((question, index) => (
        <div key={index} className="question-report">
          <h3>Question {index + 1}</h3>
          <p>{question.question}</p>
          
          <div className="answers">
            <div className="user-answer">
              <strong>Your Answer:</strong>
              <span className={answers[index] === question.correct_answer ? 'correct' : 'incorrect'}>
                {answers[index] || 'Not answered'}
              </span>
            </div>
            
            <div className="correct-answer">
              <strong>Correct Answer:</strong>
              <span>{question.correct_answer}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReportPage