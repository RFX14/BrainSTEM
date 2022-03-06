import '../../lib/dropdownStyles.css';
import SerialPlot from "../../SerialPlot";
import { useState, useEffect } from 'react';
import '../../../App.css';

const { ipcRenderer } = window.require('electron');

const StrainDemo1 = () => {
    const sensor = '0';
    const [measurement, setMeasurement] = useState(0);
    setInterval(getNewData, 500);

    function getNewData() {
        setMeasurement(ipcRenderer.sendSync('readData', sensor));
        console.log(measurement);
    }

    // ! UPDATE with proper conversions
    function getVoltage(adcValue) {
        const RESISTOR = 10000;
        const resistorValue = RESISTOR / (1023.0 / adcValue - 1.0);
        const voltage = .0005 * resistorValue;

        return voltage;
    }

    // ! UPDATE with proper conversions
    function getConverted(adcValue) {
        const voltage = getVoltage(adcValue);
        const converted = -1.67e-3 * voltage + 42;

        return converted;
    }

    return (
        <div>
            <div className='container2'>
                <p>Try placing different items on the scale! Try to find the lightest item that can be measured! Do you think you can find the minimum weight needed to register on the scale?</p>
            </div>
            
            <div className='container2'>
                <h2>Measurment:</h2>
                <h3>{measurement}</h3>
            </div>
        </div>
    );
}

export default StrainDemo1