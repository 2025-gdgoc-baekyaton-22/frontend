import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react'
import './App.css'

// 각 페이지 컴포넌트 임포트
import Index from './pages/Index';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SurveyIndex from './pages/SurveyIndex';
import Ai from './pages/Ai';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/survey-index" element={<SurveyIndex />} />
          <Route path="/ai" element={<Ai />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
