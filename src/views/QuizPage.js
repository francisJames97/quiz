import React from 'react';

function QuizPage({
    currentIndex,
    questions,
    watch,
    timer,
    handleAnswer,
    handleClickToggleView

}) {


    return (
        <>
            <div className="question-section">
                <div className="question-count">
                    Question {currentIndex + 1}/{questions.length}
                </div>
                <div className="question-text">
                    {questions[currentIndex].questionText}
                </div>
                <div className="question-timer">
                    <img src={watch} alt="stopwatch icon" />
                    <p>{`0:${timer < 10 ? '0' : ''}${timer}`}</p>

                </div>
                <p className='viewSummaryBtn' onClick={handleClickToggleView}>View Summary</p>
            </div>
            <div className="answer-section">
                {questions[currentIndex].answerOptions.map((answer, i) => {
                    return (
                        <button
                            className='answerBtn'
                            data-testid={i + 1}
                            key={i}
                            onClick={() => handleAnswer(answer, currentIndex)}
                        >
                            {answer.answerText}
                        </button>
                    );
                })}
            </div>

        </>
    );
}

export default QuizPage;