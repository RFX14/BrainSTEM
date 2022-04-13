import { useState, useEffect } from 'react'
import Quiz from "./lib/Quiz"
import {  testQuiz, thermB, photoB, strainB, microB, pirB } from "./Quizes"

const QuizPage = ({quizName}) => {
    const [quizResult, setQuizResult] = useState()
    var currentQuiz;
    switch (quizName) {
        case 'thermB':
            currentQuiz = thermB
            break;
        case 'photoB':
            currentQuiz = photoB  
            break;
        case 'strainB':
            currentQuiz = strainB
            break;
        case 'microB':
            currentQuiz = microB
            break;
        case 'pirB':
            currentQuiz = pirB
            break;
        default:
            currentQuiz = testQuiz
            break;
    } 
    useEffect(() => {
        if(quizResult) {
            console.log('quizResult', quizResult)
        }
    }, [quizResult])

    return (
        <Quiz 
        quiz={currentQuiz}
        shuffle
        showInstantFeedback
        onComplete={setQuizResult}
        />
    )
}
export default QuizPage