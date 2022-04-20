import '../../lib/dropdownStyles.css';
import '../../../App.css';
import { useState } from 'react';
import Slider from '@material-ui/core/Slider'
import Button from '../../Button';

const { ipcRenderer } = window.require('electron');

var sensorAndSensitivy = '>' // Decimal 62
const MicAdvDemo2 = () => {
    const [sensi, changeSensi] = useState(1); // Just used to update the view, not actually store data

    setInterval(sendData, 500);

    function sendData() {
        ipcRenderer.sendSync('readData', sensorAndSensitivy);
        console.log('sending: ', sensorAndSensitivy);
    }

    function updateSensiStuff(data) {
        sensorAndSensitivy = String.fromCharCode(62); // Min value is 62
        if (data === 2) {
            sensorAndSensitivy = String.fromCharCode(62);
        } else if (data === 3) {
            sensorAndSensitivy = String.fromCharCode(63);
        } else if (data === 4) {
            sensorAndSensitivy = String.fromCharCode(64);
        } else {
            sensorAndSensitivy = String.fromCharCode(65);
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

                <h3>Microphone Sensitivity (Minimum Required Voltage to keep LED on)</h3>
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
                
                <br />
                <br />

                <Button text='DEMO 2' link='/mic/effectsdemo' />
            </div>

        </div>
    );
}

export default MicAdvDemo2