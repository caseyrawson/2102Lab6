import React from 'react';
import { useNavigate } from 'react-router-dom';
import quizPageStyle from '../QuizPageStyle';
import my_state from './my_state';
import my_questions from '../model/basic_questions.json';
import { incrementScore, dontIncrementScore, handleSubmit } from '../controller/quizController';

class Quiz extends React.Component {
    state = {
        score: 0,
        count: 0,
    };

    navigateToResults = () => {
        const { score, count } = this.state;
        this.props.navigate('/results', { state: { score, totalQuestions: count } });
    };

    render() {
        return (
            <div style={quizPageStyle}>
                <h1>My Questions</h1>
                {my_questions.map((quest) => (
                    <div key={quest["id"]}>
                        <h2>{quest["question"]}</h2>
                        {quest["answers"].map((ans) => (
                            <div key={`${quest["id"]}-${ans["answer"]}`}>
                                <label>
                                    <input
                                        type="radio"
                                        name={quest["id"]}
                                        onClick={
                                            ans["isCorrect"]
                                                ? () => incrementScore(this.state, (newState) => this.setState(newState))
                                                : () => dontIncrementScore(this.state, (newState) => this.setState(newState))
                                        }
                                        value={ans["isCorrect"]}
                                    />
                                    {ans["answer"]}
                                </label>
                                <br />
                            </div>
                        ))}
                    </div>
                ))}
                <br />
                <button onClick={this.navigateToResults}>Done</button>
            </div>
        );
    }
}

export default function (props) {
    const navigate = useNavigate();
    return <Quiz {...props} navigate={navigate} />;
}