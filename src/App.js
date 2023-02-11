/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import watch from '../src/assets/Images/watch.png'
import { questions } from "./assets/data/questions";
import QuizPage from "./views/QuizPage";
import SummaryPage from "./views/SummaryPage";


export default function App() {
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerId, setTimerId] = useState();
  const [timer, setTimer] = useState(60);
  const [summary, setSummary] = useState([]);



  const notify = () => toast.error('Timeout!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });


  function handleClickToggleView() {
    setQuizFinished(!quizFinished);
    clearInterval(timerId);
    setTimer(60);
    setCurrentIndex(0);
    setSummary([]);
    setScore(0)
  }


  function handleAnswer(answer, i) {

    if (answer.isCorrect) setScore((s) => s + 1);
    
    const  correctAnswer = questions[i].answerOptions.find((item) => item.isCorrect === true )

    const newEntry = {
      answer,
      question: questions[i].questionText,
      time : `${60 - timer}Sec`,
      correctAnswer: correctAnswer.answerText
    }
    console.log(answer);

    let newData = [...summary, newEntry]

    setSummary(newData)



    if (currentIndex === questions.length - 1) {
      setQuizFinished(true);
      clearInterval(timerId);

    } else {
      setCurrentIndex((index) => index + 1);
      setTimer(60);
    }


  }


 



  // For changing page on timeout
  useEffect(() => {


    if (timer == 0) {


      if (currentIndex === questions.length - 1) {
        setQuizFinished(true);
        clearInterval(timerId);

      } else {
        notify();
        setCurrentIndex((index) => index + 1);
        setTimer(60);
      }



    }

  }, [timer])



  // For timer
  useEffect(() => {

    setTimerId(
      setInterval(() => {
        setTimer(state => state - 1);
      }, 1000)
    );



    return () => clearInterval(timerId);

  }, [quizFinished])

  return (
    <div className="app">
      <ToastContainer />
      {quizFinished ?
        <SummaryPage
          score={score}
          summary={summary}
          handleClickToggleView={handleClickToggleView}
       
        /> :
        <QuizPage
        currentIndex={currentIndex}
        questions={questions}
        watch={watch}
        timer={timer}
        handleAnswer={handleAnswer}
        handleClickToggleView={handleClickToggleView}

        />
      }
    </div>
  );
}
