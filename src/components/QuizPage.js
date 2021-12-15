import { useState, useEffect } from 'react'
import Quiz from "./lib/Quiz"
import testQuiz from "./Quizes"

const QuizPage = ({quizName}) => {
    const [quizResult, setQuizResult] = useState()

    useEffect(() => {
        if(quizResult) {
            console.log('quizResult', quizResult)
        }
    }, [quizResult])

    return (
        <Quiz 
        quiz={testQuiz}
        shuffle
        showInstantFeedback
        onComplete={setQuizResult}
        />
    )
}
export default QuizPage