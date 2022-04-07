import './../../../App.css';
import image6 from './../strain/images/image1.png';
import image7 from './../strain/images/image7.png';
import image34 from './../strain/images/image34.png';
import image8 from './../strain/images/image8.png';
import Button from '../../Button';

const StrainAdvancedLessonPlan = () => {
    return (
        <div className='container2'>
            <p>We know that strain gauges are really small, so the changes to the resistance of the strain gauge due to stretching and compression will also be really tiny.</p>

            <br/>

            <img src={image34} />

            <br />
            <br />

            <p>As a reminder, the stretching and compressing is changing the lengths of the tiny wires on the strain gauge, changing the resistance. When the resistance changes, the output voltage changes and we can find the pressure of something through that.</p>

            <br />

            <p>A very tiny change in voltage like that can be because of a lot of things, a disturbance in the circuit, a surge in voltage etc.. So how do we differentiate? How do we make use of strain gauges properly?</p>
            
            <br />
            
            <p>Thankfully there is a type of circuit called the Wheatstone Bridge, shown below.</p>

            <br />

            <img src={image6} />

            <br />
            <br />

            <p>Drawn another way, it can look like this:</p>

            <br />

            <img src={image7} width='500'/>

            <br />
            <br />

            <p>If we take a look at Resistor 1, it is both in series with Resistor 2 AND in parallel with Resistor 3. So what is the purpose of this circuit exactly? Well, notice in the first picture the gap where it says Vo, and the device that says 0 volts at the center that says 0 volts in the second picture?</p>

            <br />

            <p>Essentially, when the ratio of resistors is in balance, the circuit is at its “balance point”, which means that the voltage reading in the middle of the resistors is ZERO.</p>

            <br />

            <img src={image8} />

            <br />
            <br />

            <p>Now if the ratio were to be changed such that it is no longer at the balance point, then the voltage output in the middle would change. What if we replaced one of the resistors with a strain gauge then?</p>

            <br />

            <p>When the strain gauge sensor is not being stretched or compressed, we would be at the balance point, but when it is stretched, the voltage output would be different from 0! Using this, we can calculate the strain being put on the sensor even if the values are really small, because of the wheatstone bridge those values are amplified.</p>

            <br />
            <br />

            <Button text='DEMO' link='/strain/demo2' />
        </div>
    );
}

export default StrainAdvancedLessonPlan