import '../../lib/dropdownStyles.css';
import SerialPlot from "../../SerialPlot";
import { useState, useEffect } from 'react';
import '../../../App.css';

const { ipcRenderer } = window.require('electron');

// ! Insert photo showing how to build circuit
const StrainDemo2 = () => {
    const sensor = 'B';
    const [measurement, setMeasurement] = useState(0.0);
    setInterval(getNewData, 500);

    function getNewData() {
        setMeasurement(ipcRenderer.sendSync('readData', sensor));
        console.log(measurement);
    }

    return (
        <div>
            <div className='container2'>
                <p>Try creating your own strain gauge using the image provided!</p>
                <p>Once you've finished hook it up and see if you can get a measurement!</p>
            </div>
            
            <div className='container2'>
                <h2>Raw ADC Measurment:</h2>
                <h3>{measurement}</h3>
            </div>
        </div>
    );
}

export default StrainDemo2