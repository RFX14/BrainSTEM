import { useState, useEffect } from 'react'
import Quiz from "./lib/Quiz"
import {  testQuiz, thermB, photoB, strainB, microB, pirB, thermA, photoA, strainA, microA, pirA } from "./Quizes"

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
        case 'thermA':
            currentQuiz = thermA
            break;
        case 'photoA':
            currentQuiz = photoA
            break;
        case 'strainA':
            currentQuiz = strainA
            break;
        case 'microA':
            currentQuiz = microA
            break;
        case 'pirA':
            currentQuiz = pirA
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