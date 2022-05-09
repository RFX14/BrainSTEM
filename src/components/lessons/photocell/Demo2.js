import '../../lib/dropdownStyles.css';
import SerialPlot from "../../SerialPlot";
import '../../../App.css';
import { useState, useEffect } from 'react';
import Slider from '@material-ui/core/Slider'

const { ipcRenderer } = window.require('electron');

var sensorAndSensitivy = ':' // Decimal 58
const PhotocellDemo2 = () => {
    const [sensi, changeSensi] = useState(1); // Just used to update the view, not actually store data

    setInterval(sendData, 500);

    function sendData() {
        ipcRenderer.sendSync('readData', sensorAndSensitivy);
        console.log('sending: ', sensorAndSensitivy);
    }

    function updateSensiStuff(data) {
        sensorAndSensitivy = String.fromCharCode(58); // Min value is 58
        if (data === 2) {
            sensorAndSensitivy = String.fromCharCode(58);
        } else if (data === 3) {
            sensorAndSensitivy = String.fromCharCode(59);
        } else if (data === 4) {
            sensorAndSensitivy = String.fromCharCode(60);
        } else {
            sensorAndSensitivy = String.fromCharCode(61);
        }
        changeSensi(data);
    }

    return (
        <div>
            <div className='container2'>
                <p>Change the sensitivity of the LED lighting up by moving the slider!</p>
                <p>This type of sensitivity is done through software, by being selective as to what voltage we would like to turn on the LED</p>

                <br />
                <br />

                <h3>Photocell Sensitivity (Minimum Required Voltage to keep LED on)</h3>
                <Slider
                aria-label="sensitivity"
                value={sensi}
                onChange={(e, value) => updateSensiStuff(value)}
                valueLabelDisplay="auto"
                marks={true}
                step={1}
                min={2}
                max={5}
                />
            </div>
        </div>
    );
}

export default PhotocellDemo2