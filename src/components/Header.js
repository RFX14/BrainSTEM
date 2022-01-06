import { Link } from 'react-router-dom';
import ReactDropdown from 'react-dropdown';
import './lib/dropdownStyles.css';
import { useState, useEffect } from 'react';
const { ipcRenderer } = window.require('electron');

const Header = () => {
    const [ports, updatePorts] = useState([]);
    const [selectedPort, updateSelection] = useState({value: 'zero', label: 'zero'});

    ipcRenderer.on('isReady', (event, args) => {
        console.log(args);
        if(args) {
            updatePorts(getAvailablePorts);
        }
    });

    function getAvailablePorts() {
        var resp = ipcRenderer.sendSync('getPorts');
        console.log("Response: ", resp);
        
        return resp;
    }

    useEffect(() => {
        ipcRenderer.send('updateSelectedPort', selectedPort.value);
    }, [selectedPort])

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
