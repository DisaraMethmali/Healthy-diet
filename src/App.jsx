import { useState } from 'react'
import Home from './pages/Home';
import './App.css'
import TrackerPage from './pages/TrackerPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Second from './pages/secondPge';
function App() {
 

  return (
    <>
     <Router>
     
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/s" element={<Second/>} />
        <Route exact path="/tracker" element={<TrackerPage/>} />
       
      </Routes>
    </Router>
      
    </>
  )
}

export default App
