import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import StartPage from './components/StartPage'
import QuizPage from './components/QuizPage'
import ReportPage from './components/ReportPage'
import './App.css'

function App() {
  const [userEmail, setUserEmail] = useState('')
  const [quizAnswers, setQuizAnswers] = useState({})
  const [questions, setQuestions] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage setUserEmail={setUserEmail} setQuestions={setQuestions} />} />
        <Route 
          path="/quiz" 
          element={userEmail ? <QuizPage userEmail={userEmail} questions={questions} setQuizAnswers={setQuizAnswers} /> : <Navigate to="/" />} 
        />
        <Route 
          path="/report" 
          element={userEmail ? <ReportPage questions={questions} answers={quizAnswers} userEmail={userEmail} /> : <Navigate to="/" />} 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App