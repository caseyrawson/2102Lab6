import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Results = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };

    return (
        <div>
            <h1>Quiz Results</h1>
            <p>Your Score: {score} / {totalQuestions}</p>
            <button onClick={() => navigate('/')}>Take Quiz Again</button>
        </div>
    );
};

export default Results;
