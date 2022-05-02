import '../../lib/dropdownStyles.css';
import { useState } from 'react';
import '../../../App.css';
import image1 from '../pir/pirCircuit.PNG';

const { ipcRenderer } = window.require('electron');

const PIRDemo2 = () => {
    const sensor = '3';
    const [measurement, setMeasurement] = useState(0.0);
    setInterval(getNewData, 500);

    function getNewData() {
        setMeasurement(ipcRenderer.sendSync('readData', sensor));
        console.log(measurement);
    }
    return (
        <div className='container2'>
            <p>Using the image below as reference create your own circuit to light up an led!</p>
            <br />
            <p>Top Yellow Wire: PIR Input</p>
            <p>Bottom Yellow Wire: PIR Output</p>
            <br />
            <img src={image1} width='500' />
        </div>
    );
}

export default PIRDemo2