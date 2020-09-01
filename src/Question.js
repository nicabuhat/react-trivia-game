import React from 'react';

const sampleAnswer = ['one', 'two', 'three', 'four'];

export default function Question() {
    return (
        <div className="question">
            <h2>Question Here</h2>
            {sampleAnswer.map((answer, index) => (
                <button key={index}>answer</button>
            ))}
        </div>
    );
}
