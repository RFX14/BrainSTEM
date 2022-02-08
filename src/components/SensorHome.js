import Button from "./Button"
import PropTypes from 'prop-types'

const SensorHome = ({title, quizLink, beginnerLink, advancedLink}) => {
    return (
        <div className="container">
            <h2>{title}</h2>

            <br/>

            <Button text="Placement Quiz" link={quizLink}/>
            <Button text="Beginner Lessons" link={beginnerLink}/>
            <Button text="Advanced Lessons" link={advancedLink}/>
        </div>
    )
}

SensorHome.defaultProps = {
    title: "Enter Sensor Name",
    quizLink: "/"
}

export default SensorHome
