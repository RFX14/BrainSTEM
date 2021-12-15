import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Button = ({color, text, link}) => {
    return (
        <>
        <Link to={link}>
            <button 
                style={{ backgroundColor: color }}
                className='btn'> {text}
            </button>
        </Link>
        </>
    )
}

Button.defaultProps = {
    link: "/",
    color: "steelblue"
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string
}

export default Button
