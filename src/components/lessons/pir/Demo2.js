import '../../lib/dropdownStyles.css';
import { useState } from 'react';
import '../../../App.css';
import image1 from '../pir/pirCircuit.PNG';
import image2 from '../pir/resisPhoto.jpg';
import image3 from '../pir/jmpPhoto.png';

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
            <p>For this demo, you will be assembling a circuit that will light up an LED when the PIR sensor detects motion - very similar to a motion activated light you might have seen before! The circuit to assemble is shown below: </p>
            <br />
            <p>Top Yellow Wire: PIR Input</p>
            <p>Bottom Yellow Wire: PIR Output</p>
            <br />
            <img src={image1} width='500' />
            <br />
            <br />
            <p>First take the LED and connect it to any two ports of your choice vertically - choose any of the letters and push the two ends of the LED into any two holes in the column. Next, pick out the resistor shown in the picture below from the resistors.</p>
            <br />
            <img src={image2} width='200'/>
            <br />
            <p>One end of the resistor will be connected to the top end of the LED - so push one end of the resistor into a hole on the same row but of a different column. Then, take the other end of the resistor and connect it to a hole in the “-” column on the end of the board.</p>
            <br />
            <p>Next we are going to connect the board to the StemBOX. Take a red jumper wire (like the one shown below) and connect one of it to the red port coming out of the PIR section of the board, then take the other end and connect it to a hole in the “+” column on the breadboard. Then take a black jumper wire from the box and connect it to any hole in the same “-” column that you connected the resistor to. Now, take a blue jumper wire and connect it to the blue port on the PIR section of the board and the other end to a hole in the column right under where the resistor is connected next to the LED.</p>
            <br />
            <img src={image3} height='250'/>
            <br />
            <br />
            <p>Now we are going to connect the PIR sensor to the setup. Take the PIR sensor out of the box along with a red jumper wire. One end of the red jumper wire will be connected to a hole on the same “+” column that you connected the earlier red jumper wire to. The other end will be connected to rightmost pin on the bottom of the PIR that says +50 underneath it. Now take a white jumper wire and connect one end to the middle pin on the PIR that says OUT underneath it. The other end will be connected to the BOTTOM pin on the LED by pushing it into a column next to it but on the same row. Note that this cannot be on the same column that the resistor is in. Finally, take a black cable and connect one end to the GND pin on the PIR and the other end to the “-” column that you connected cables to earlier.</p>
            <br />
            <p>You are now done building your PIR circuit and are ready to do the demo! 
</p>
        </div>
    );
}

export default PIRDemo2