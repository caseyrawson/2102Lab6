import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz.js';
import Results from './components/Results.js'; // New Results page

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            {/* Route for the quiz page */}
            <Route path="/" element={<Quiz />} />
            {/* Route for the results page */}
            <Route path="/results" element={<Results />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
