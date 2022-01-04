import { Link } from 'react-router-dom';
import ReactDropdown from 'react-dropdown';
import './lib/dropdownStyles.css';
import { useState, useEffect } from 'react';
const { ipcRenderer } = window.require('electron');

const TestSerial = ({mode}) => {
    const serialModes = [0, 1, 2];
    const [selectedMode, updateSelection] = useState(-1);
    const [data, updateData] = useState('no-data');

    //Update Mode
    useEffect(() => {
        ipcRenderer.send('updateMode', selectedMode);
    }, [selectedMode]);

    //Read Data


    return (
        <div className='container2'>
            <h3>Recieved Msg: </h3>
            <p>{data}</p>
        </div>
    )
}

export default TestSerial
