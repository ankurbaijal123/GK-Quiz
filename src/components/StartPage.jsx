import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function StartPage({ setUserEmail, setQuestions }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=15')
      setQuestions(response.data.results)
      setUserEmail(email)
      navigate('/quiz')
    } catch (error) {
      alert('Failed to load questions. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="start-page">
      <h1>Quiz Application</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Start Quiz'}
        </button>
      </form>
    </div>
  )
}

export default StartPage