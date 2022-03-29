import '../../lib/dropdownStyles.css';
import SerialPlot from "../../SerialPlot";
import { useState, useEffect } from 'react';
import '../../../App.css';

const { ipcRenderer } = window.require('electron');

const StrainDemo1 = () => {
    const sensor = '2';
    const [measurement, setMeasurement] = useState(0.0);
    setInterval(getNewData, 500);

    function getNewData() {
        setMeasurement(ipcRenderer.sendSync('readData', sensor));
        console.log(measurement);
    }

    return (
        <div>
            <div className='container2'>
                <p>Try placing different items on the scale! Try to find the lightest item that can be measured! Do you think you can find the minimum weight needed to register on the scale?</p>
            </div>
            
            <div className='container2'>
                <h2>Measurment:</h2>
                <h3>{measurement} lbs</h3>
            </div>
        </div>
    );
}

export default StrainDemo1