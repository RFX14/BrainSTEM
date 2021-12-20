import { Link } from 'react-router-dom'
import ReactDropdown from 'react-dropdown'
import './lib/dropdownStyles.css'
import {useState, useEffect} from 'react'

const { ipcRenderer } = window.require('electron')

const Header = () => {
    const [ports, updatePorts] = useState([])

    ipcRenderer.on('ports', (event, msg) => {
        if(msg) {
            var newArray = []
            for(const [key, value] of Object.entries(msg)) {
                console.log(key);
                newArray.push(value.path);
            }

            updatePorts(newArray);
        }
    })

    return (
        <div className='container2'>
            <header className='header'>
                <Link to='/'><h1>BrainSTEM</h1></Link>
            </header>

            <h3>Comm Port:</h3>
            <ReactDropdown 
                options={ports}
                value={ports[0]}
                placeholder={"Select a port"}
            />
        </div>
    )
}

export default Header
