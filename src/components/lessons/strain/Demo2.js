import '../../lib/dropdownStyles.css';
import SerialPlot from "../../SerialPlot";
import { useState, useEffect } from 'react';
import '../../../App.css';
import img from '../strain/strainCircuit.PNG';
import img2 from '../strain/strainPhoto.jpg';

const { ipcRenderer } = window.require('electron');

// ! Insert photo showing how to build circuit
const StrainDemo2 = () => {
    const sensor = 'B';
    const [measurement, setMeasurement] = useState(0.0);
    const [voltage, setVolts] = useState(0);
    setInterval(getNewData, 500);

    function getNewData() {
        const newData = ipcRenderer.sendSync('readData', sensor)
        setMeasurement(newData);
        const volts = (5/1024) * newData;
        setVolts(volts);
        console.log(measurement);
    }

    return (
        <div>
            <div className='container2'>
                <p>Try creating your own strain gauge using the image & video provided!</p>
                <br />
                <a href='https://www.youtube.com/watch?v=lWFiKMSB_4M' target='_blank'>Watch Video</a>
                <br />
                <br />
                <p>Once you've finished hook it up and see if you can get a measurement!</p>
                <br />
                <p>Dark Green Wire & Light Green Wire: Strain Gauge Input</p>
                <p>Blue Wire: Strain Gauge Output (Connect to top most analog port)</p>
                <br />
                <br />
                <img src={img2} width='250' />
                <br />
                <br />
                <img src={img} width='500' />
            </div>
            
            <div className='container2'>
                <h2>Raw ADC Measurment: {measurement}</h2>
                <h2>Voltage: {Math.round((voltage + Number.EPSILON) * 100) / 100}V</h2>
            </div>
        </div>
    );
}

export default StrainDemo2