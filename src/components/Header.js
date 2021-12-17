import { Link } from 'react-router-dom'
import ReactDropdown from 'react-dropdown'
import './lib/dropdownStyles.css'
const { ipcRenderer } = window.require('electron')

const Header = () => {
    const options = ['one', 'two', 'three']
    ipcRenderer.on('ports', (event, msg) => {
        console.log(msg)
    })
    return (
        <div className='container2'>
            <header className='header'>
                <Link to='/'><h1>BrainSTEM</h1></Link>
            </header>

            <h3>Comm Port:</h3>
            <ReactDropdown 
                options={options}
                value={options[0]}
                placeholder={"Select an option"}
            />
        </div>
    )
}

export default Header
