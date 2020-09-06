import React from 'react';

export default function ResultModal() {
    return (
        <div className="result-modal-content">
            <h3>
                <span role="img" aria-label="emoji-fist-pump">
                    👊👊👊
                </span>
                <br />
                YOU WON!
            </h3>
            <h3>
                <span role="img" aria-label="emoji-crying">
                    😢😢😢
                </span>
                <br />
                YOU LOST!
            </h3>

            <div className="correct-answer">
                <small>The correct answer was:</small>
                <br />
                <strong>Answer here</strong>
            </div>
        </div>
    );
}
