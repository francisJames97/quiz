import React from 'react';

function QuestionSummaryCard({detail,index}) {
    return (
        <div className='questionSummaryCard'>
            <p>({index+1}) {detail.question}</p>
            <p>Your Answer :- {detail.answer.answerText}</p>
            <p>Correct Answer :- {detail.correctAnswer}</p>
            <p>Time Taken:- {detail.time}</p>
            
          </div>
    );
}

export default QuestionSummaryCard;