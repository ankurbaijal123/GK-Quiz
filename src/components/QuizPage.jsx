import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function QuizPage({ questions, setQuizAnswers }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeLeft, setTimeLeft] = useState(30 * 60)
  const [visitedQuestions, setVisitedQuestions] = useState([0])
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = () => {
    setQuizAnswers(answers)
    navigate('/report')
  }

  const handleAnswerSelect = (answer) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answer
    }))
  }

  const goToQuestion = (index) => {
    setCurrentQuestion(index)
    if (!visitedQuestions.includes(index)) {
      setVisitedQuestions(prev => [...prev, index])
    }
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const currentQuestionData = questions[currentQuestion]
  const choices = currentQuestionData ? 
    [...currentQuestionData.incorrect_answers, currentQuestionData.correct_answer] : []

  return (
    <div className="quiz-page">
      <div className="timer">
        Time Left: {minutes}:{seconds.toString().padStart(2, '0')}
      </div>
      
      <div className="question-navigation">
        {questions.map((_, index) => (
          <button
            key={index}
            onClick={() => goToQuestion(index)}
            className={`
              ${visitedQuestions.includes(index) ? 'visited' : ''}
              ${answers[index] ? 'answered' : ''}
              ${currentQuestion === index ? 'current' : ''}
            `}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="question-container">
        <h2>Question {currentQuestion + 1}</h2>
        <p>{currentQuestionData?.question}</p>
        
        <div className="choices">
          {choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(choice)}
              className={answers[currentQuestion] === choice ? 'selected' : ''}
            >
              {choice}
            </button>
          ))}
        </div>

        <div className="navigation-buttons">
          <button
            disabled={currentQuestion === 0}
            onClick={() => goToQuestion(currentQuestion - 1)}
          >
            Previous
          </button>
          {currentQuestion === questions.length - 1 ? (
            <button onClick={handleSubmit}>Submit Quiz</button>
          ) : (
            <button onClick={() => goToQuestion(currentQuestion + 1)}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuizPage