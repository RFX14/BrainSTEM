import Button from "./Button"

const SensorHome = ({title}) => {
    return (
        <div className="container">
            <h2>{title}</h2>

            <br/>

            <Button text="Placement Quiz" />
            <Button text="Beginner Lessons" />
            <Button text="Advanced Lessons" />
        </div>
    )
}

export default SensorHome
