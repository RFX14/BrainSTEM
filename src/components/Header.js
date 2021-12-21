import { Link } from 'react-router-dom'
import ReactDropdown from 'react-dropdown'
import './lib/dropdownStyles.css'
import {useState, useEffect} from 'react'

const Header = () => {
    const [ports, updatePorts] = useState([])
    const [selectedPort, updateSelection] = useState({value: 'zero', label: 'zero'})
    const { ipcRenderer } = window.require('electron')

    ipcRenderer.on('ports', (event, msg) => {
        if(msg && ports.length === 0) {
            var newArray = []
            for(const [key, value] of Object.entries(msg)) {
                console.log(key);
                newArray.push(value.path);
            }

            updatePorts(newArray);
        } else {
            console.log("Selected Port: ", selectedPort.value)
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
                onChange={updateSelection}
            />
        </div>
    )
}

export default Header
