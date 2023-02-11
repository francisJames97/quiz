import React from 'react';
import QuestionSummaryCard from '../components/QuestionSummaryCard';


function QuizResult({ score, summary, handleClickToggleView }) {

  return (
    <div className="score-section">

      <div data-testid="score" style={{ margin: "10px" }}>
        You scored {score} out of {summary.length}
      </div>


      <div className='summaryDetails'>
        <div className='summaryStats'>
          <p>
            Correct Answers : {score}
          </p>
          <p>
            Total questions : 5
          </p>
          <p>
            Questions attempted : {summary.length}
          </p>
          <p>
            Questions not attempted : {5 - summary.length}
          </p>
        </div>
        <div className='questionSummary'>
          {summary.map((item,index) => {

            return (<QuestionSummaryCard detail={item}  index={index}/>)
          })}
        </div>
      </div>
      <p className='viewSummaryBtn' onClick={handleClickToggleView}>Take Quiz</p>
    </div>
  )

}


function NoSummary({ handleClickToggleView }) {

  return (
    <>
      <div className="no-score-section">
        No summary available

        <p className='viewSummaryBtn' onClick={handleClickToggleView}>Take Quiz</p>
      </div>
    </>
  )

}

function SummaryPage({ score, summary, handleClickToggleView }) {
  return (
    <>
      {summary.length === 0 ? <NoSummary handleClickToggleView={handleClickToggleView} /> : <QuizResult score={score} summary={summary} handleClickToggleView={handleClickToggleView} />}
    </>
  );
}

export default SummaryPage;