import { Link } from 'react-router-dom';
import ReactDropdown from 'react-dropdown';
import './lib/dropdownStyles.css';
import { useState, useLayoutEffect } from 'react';
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

/*
    ipcRenderer.on('ports', (event, msg) => {
        if(msg && ports.length === 0) {
            var newArray = [];
            const oldPort = selectedPort.value;
            for(const [key, value] of Object.entries(msg)) {
                //console.log(key);
                newArray.push(value.path);
            }

            ipcRenderer.sendSync('portName', selectedPort.value);
            updatePorts(newArray);
        } else {
            console.log("Not ready");
        }
    })
*/

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
