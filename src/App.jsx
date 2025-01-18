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
import Setting from './pages/Setting';
import SurveyType1Index from './pages/surveyType1Index';
import SurveyType11 from './pages/surveyType11';
import SurveyType12 from './pages/surveyType12';
import SurveyType13 from './pages/surveyType13';
import SurveyType2Index from './pages/surveyType2Index';
import SurveyType21 from './pages/surveyType21';
import SurveyType22 from './pages/surveyType22';

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
          <Route path="/survey-type-1-index" element={<SurveyType1Index />} />
          <Route path="/survey-type-1-1" element={<SurveyType11 />} />
          <Route path="/survey-type-1-2" element={<SurveyType12 />} />
          <Route path="/survey-type-1-3" element={<SurveyType13 />} />
          <Route path="/survey-type-2-index" element={<SurveyType2Index />} />
          <Route path="/survey-type-2-1" element={<SurveyType21 />} />
          <Route path="/survey-type-2-2" element={<SurveyType22 />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
