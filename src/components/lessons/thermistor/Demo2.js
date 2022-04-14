import '../../lib/dropdownStyles.css';
import SerialPlot from "../../SerialPlot";
import { useState, useEffect } from 'react';
import '../../../App.css';

const { ipcRenderer } = window.require('electron');
var me = 0;
var re = 0;
const ThermistorDemo2 = () => {
    const sensor = '1';
    const [measurement, setMeasurement] = useState(0.0);
    const [resistance, setResist] = useState(0);
    setInterval(getConverted, 500);

    //! Using Linear Approx. as the real is too slow
    function getConverted() {
        const RESISTOR = 10000;
        const adcValue = ipcRenderer.sendSync('readData', sensor);
        const resistorValue = RESISTOR / (1023.0 / adcValue - 1.0);
        console.log(resistorValue)
        /*
        const convertedCelsius = 77.6 - (22.7 * Math.log(resistorValue / 1000));
        const converted = (convertedCelsius * (9/5)) + 32; 
        */
        const convertedCelsius = (-1.64*(resistorValue / 1000)) + 44.5;
        const converted = (convertedCelsius * (9/5)) + 32; 

        setResist(resistorValue);
        setMeasurement(converted);
        console.log(converted, resistorValue);
    }

    return (
        <div>
            <div className='container2'>
                <p>Try creating your own linear approximation using your favorite spreadsheet editor!</p>
                <p>Measure the temperature of certain items (cold water, hot water, etc...) and write down the associated resistance.</p>
                <p>Using this information use your spreadsheet editor to plot these points and find how temperature & resistance relate to each other.</p>
            </div>
            
            <div className='container2'>
                <h2>Temperature:</h2>
                <h3>{measurement} °F</h3>

                <br />

                <h2>Resistance:</h2>
                <h3>{resistance} Ω</h3>
            </div>
        </div>
    );
}

export default ThermistorDemo2