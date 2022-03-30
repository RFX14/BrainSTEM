import '../../lib/dropdownStyles.css';
import SerialPlot from "../../SerialPlot";
import { useState, useEffect } from 'react';
import '../../../App.css';

const { ipcRenderer } = window.require('electron');

const PIRDemo1 = () => {
    const sensor = '3';
    const [measurement, setMeasurement] = useState(0.0);
    setInterval(getNewData, 500);

    function getNewData() {
        setMeasurement(ipcRenderer.sendSync('readData', sensor));
        console.log(measurement);
    }
    return (
        <div className='container2'>
            <p>Notice how the LED on the board lights up whenever the PIR detects motion, try messing with the sensitivity on the sensor!</p>
        </div>
    );
}

export default PIRDemo1