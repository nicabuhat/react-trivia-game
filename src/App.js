import React from 'react';
import CategorySelector from './CategorySelector';
import Scoreboard from './Scoreboard';
import Question from './Question';
import ResultModal from './ResultModal';

function App() {
    return (
        <div className="app">
            <ResultModal />
            <div className="question-header">
                <CategorySelector />
                <Scoreboard />
            </div>
            <div className="question-main">
                <Question />
            </div>
            <div className="question-footer">
                <button></button>
            </div>
        </div>
    );
}

export default App;
