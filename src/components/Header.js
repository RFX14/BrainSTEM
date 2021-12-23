import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <Link to='/'><h1>BrainSTEM</h1></Link>
        </header>
    )
}

export default Header
