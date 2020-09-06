import React, { useEffect, useState } from 'react';
import CategorySelector from './components/CategorySelector';
import Scoreboard from './components/Scoreboard';
import Question from './components/Question';
import ResultModal from './components/ResultModal';
import './app.css';

function App() {
    //set question to null on load
    const [question, setQuestion] = useState(null);

    // load questions from api once the app is loaded
    useEffect(() => {
        getQuestion();
    }, []);

    function getQuestion() {
        const url = 'https://opentdb.com/api.php?amount=1';

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                //change question state
                setQuestion(data.results[0]);
            });
    }

    return (
        <div className="app">
            {/* <ResultModal /> */}
            <div className="question-header">
                <CategorySelector />
                <Scoreboard />
            </div>
            <div className="question-main">
                {question && <Question question={question} />}
            </div>
            <div className="question-footer">
                <button className="question-footer__button">
                    Go to next question
                </button>
            </div>
        </div>
    );
}

export default App;
