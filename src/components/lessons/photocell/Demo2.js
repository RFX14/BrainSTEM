import '../../lib/dropdownStyles.css';
import SerialPlot from "../../SerialPlot";
import '../../../App.css';
import { useState, useEffect } from 'react';
import Slider from '@material-ui/core/Slider'

const { ipcRenderer } = window.require('electron');

// ! Check XOR of sensor num is greater than N, and N will determine the sensitivy
var sensorAndSensitivy = ':' // Decimal 58
const PhotocellDemo2 = () => {
    const [sensi, changeSensi] = useState(1); // Just used to update the view, not actually store data

    setInterval(sendData, 500);

    function sendData() {
        ipcRenderer.sendSync('readData', sensorAndSensitivy);
        console.log(sensorAndSensitivy);
    }

    function updateSensiStuff(data) {
        sensorAndSensitivy = String.fromCharCode(57 + data); // Min value is 58
        changeSensi(data);
    }

    return (
        <div>
            <div className='container2'>
                <p>Change the sensitivity of the LED lighting up by moving the slider!</p>
                <p>This type of sensitivity is done through software, by being selective as to what voltage we would like to turn on the LED</p>

                <br />
                <br />

                <h3>Photocell Sensitivity (Divide by 4, to get Voltage Value)</h3>
                <Slider
                aria-label="sensitivity"
                value={sensi}
                onChange={(e, value) => updateSensiStuff(value)}
                valueLabelDisplay="auto"
                marks={true}
                step={1}
                min={1}
                max={4}
                />
            </div>
        </div>
    );
}

export default PhotocellDemo2