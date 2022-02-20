import './../../../App.css';
import image1 from './../pir/images/image1.gif';
import image2 from './../pir/images/image2.png';
import image3 from './../pir/images/image3.png';
import Button from '../../Button';

const PIRLessonPlan = () => {
    return (
        <div className='container'>
            <p>Humans and animals emit heat, we might not normally notice it but we are! The amount of heat we emit changes based on how we are doing on that day. For example, when you have a fever you can feel that you are warmer than when you don’t have a fever. When you have a fever you are emitting more heat! This is because of chemical reactions that are happening inside your body - but that's a topic for another day.</p>

            <br/>

            <img src={image1}></img>

            <br/>
            <br/>

            <p>The motion sensor we are using is somewhat similar to the thermometer - it works based on temperature! The motion sensor has pyroelectric sensors inside of it - these are essentially fancy thermometers. The motion sensor works based on the temperature difference between the pyroelectric sensors. When there is no human or animal around the sensor, then all the sensors are reading the same temperature. But if a human or animal walks in front of the sensor, then the temperature in front of some of the sensors changes. This causes a change in the electricity output from the motion sensor. Look at the pictures below!</p>

            <br/>

            <img src={image2} width='500'></img>
            <img src={image3} width='500'></img>

            <br/>
            <br/>

            <p>Now, what if instead of a human or animal moving in front of a sensor we dropped a really hot spoon. That would also register as “motion” because the sensor is just checking if the sensors are detecting a temperature change.</p>
        </div>
    );
}

export default PIRLessonPlan