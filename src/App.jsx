import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import RegistrationProcess from './pages/RegistrationProcess'
import ChatbotPage from './pages/ChatbotPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatbotPage />} />
        <Route path="/registration" element={<RegistrationProcess />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
