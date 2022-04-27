import Button from "./Button"
import PropTypes from 'prop-types'

const SensorHome = ({title, quizLink, quizLinkA, beginnerLink, advancedLink}) => {
    return (
        <div className="container">
            <h2>{title}</h2>

            <br/>

            <Button text="Beginner Lesson" link={beginnerLink}/>
            <Button text="Beginner Assessment" link={quizLink}/>

            <br/> 
            <br/> 

            <Button text="Advanced Lesson" link={advancedLink}/>
            <Button text="Advanced Assessment" link={quizLinkA}/>
        </div>
    )
}

SensorHome.defaultProps = {
    title: "Enter Sensor Name",
    quizLink: "/",
    quizLinkA: "/"
}

export default SensorHome
