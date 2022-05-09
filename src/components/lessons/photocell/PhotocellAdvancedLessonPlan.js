import Button from '../../Button';
import './../../../App.css';
import image1 from './../photocell/images/image1.png';
import image2 from './../photocell/images/image2.png';
import image3 from './../photocell/images/image3.png';

const PhotocellAdvancedLessonPlan = () => {
    return (
        <div className='container'>
            <p>So where are photocells used? We know what they are now but why does this stuff matter? Well photocells are used in a LOT of electronics, they are one of the building blocks of the technology around us. So lets talk about some common uses.</p>

            <br/>

            <p>We can split pretty much all photocell use into two main types: analog or digital. Analog means essentially that the voltage after it goes through the photocell is used directly. So if you were to graph an analog signal it would look like the graph below.</p>

            <img src={image1} width='500'/>

            <p>As the light intensity increases, the resistance decreases.</p>

            <br/>

            <p>Digital use on the other hand is binary, only 1’s or 0’s. Essentially we tell the software that above or below a certain voltage, we are counting it as 1, otherwise a 0. As an example, consider the streetlight that turns on automatically when it gets dark. When the sun starts going down, the resistance starts increasing which means voltage starts decreasing. When the voltage goes below a certain level, the software tells the light to turn on, until which the light is off.</p>

            <br/>

            <img src={image2} width='500'/>

            <br/>
            <br/>

            <h3>Use Cases:</h3>
            <ul>
                <li>We already discussed the streetlight example for starters</li>
                <li>Burglar Alarm</li>
                <ul>
                    <li>There are two parts to this. One side of the burglar alarm is casting a beam of light (infrared) in a straight line. When the light is blocked by something (like a burglar) the alarm is tripped because the voltage drops very quickly (because light intensity drops to 0)</li>
                </ul>
            </ul>

            <br />
            <br />

            <Button text='DEMO' link='/photocell/demo2' />
        </div>
    );
}

export default PhotocellAdvancedLessonPlan