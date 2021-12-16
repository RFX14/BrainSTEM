import { Link } from 'react-router-dom'
const { ipcRenderer } = window.require('electron')

const Header = () => {
    ipcRenderer.on('ports', (event, msg) => {
        console.log(msg)
    })

    return (
        <header className='header'>
            <Link to='/'><h1>BrainSTEM</h1></Link>
        </header>
    )
}

export default Header
