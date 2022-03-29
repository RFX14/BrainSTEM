import Button from "./Button"
import PropTypes from 'prop-types'

const SensorHome = ({title, quizLink, beginnerLink, advancedLink}) => {
    return (
        <div className="container">
            <h2>{title}</h2>

            <br/>

            <Button text="Beginner Lessons" link={beginnerLink}/>
            <Button text="Advanced Lessons" link={advancedLink}/>
            <Button text="Post-Assessment" link={quizLink}/>
        </div>
    )
}

SensorHome.defaultProps = {
    title: "Enter Sensor Name",
    quizLink: "/"
}

export default SensorHome
