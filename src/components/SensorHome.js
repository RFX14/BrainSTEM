import Button from "./Button"
import PropTypes from 'prop-types'

const SensorHome = ({title, quizLink, quizLinkA, beginnerLink, advancedLink}) => {
    return (
        <div className="container">
            <h2>{title}</h2>

            <br/>

            <Button text="Beginner Lessons" link={beginnerLink}/>
            <Button text="Advanced Lessons" link={advancedLink}/>
            <Button text="Beginner Assessment" link={quizLink}/>
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
