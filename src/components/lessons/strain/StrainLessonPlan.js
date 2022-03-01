import './../../../App.css';
import image1 from './../strain/images/image1.png';
import image2 from './../strain/images/image2.gif';
import image34 from './../strain/images/image34.png';
import image5 from './../strain/images/image5.png';
import Button from '../../Button';

const StrainLessonPlan = () => {
    return (
        <div className='container'>
            <p>Right off the bat, this is what a strain gauge sensor looks like:</p>

            <img src={image1} width='200'/>

            <br/>

            <p>That picture is misleading because in reality, they are much, much smaller. They are only a bit bigger than your fingernails.</p>
            <br/>
            <p>Strain gauges are used to measure pressure, the amount of force applied to a unit of area. This is done by measuring the <b><u>strain</u></b> put on them!</p>

            <br/>

            <img src={image2} width='500'/>

            <br/>
            <br/>

            <p>So how do they work...</p>

            <br/>

            <p>Strain gauges are really tiny sensors that can bend - causing the sensor to stretch and compress (look at the figure below).</p>

            <img src={image34} width='650'/>

            <p>Every wire and electronic component in the world has SOME resistance. Wires have less resistance than, say wood, but EVERYTHING has resistance. The formula to calculate resistance is shown below</p>

            <br/>

            <img src={image5} width='500'/>

            <p>Resistivity is the fundamental property of how strongly an object resists the passing of electric current. Using the same example again, wood has high resistivity but metals have low resistivity.</p>
            <p>Note that the formula has length and area as well.</p>

            <br/>

            <p>Before we talk about the following example, remember that wood does not let electricity pass through it, but copper does.</p>

            <br/>

            <p>Let’s say for example that wood’s resistivity is 20 (not a real value), and copper’s resistivity is 2 (again, not a real value).</p>

            <br/>

            <p> If we had a piece of wood that is <b>1 meter</b> long with an area of <b>1 m<sup>2</sup></b>, then the resistance would calculate to <b>20</b> (note that these units are not the ones you would use in this formula).</p>

            <br/>

            <p>Now, if we had a piece of copper that was 10 meters long with an area of <b>1 m<sup>2</sup></b>, then the resistance would calculate also calculate to <b>20.</b></p>

            <br/>

            <p>So a piece of wood and copper can have the <u>same</u> resistance!! Weird, right?</p>

            <br/>

            <p>Anyway, back to strain gauges. Remember how we said the strain gauge stretches and compresses?</p>

            <img src={image34} width='650'/>


            <p>Well, when that happens the length of the metal wires on the strain gauge changes - changing the resistance of the strain gauge sensor! So when the resistance is changing, the output voltage also changes, and based on the voltage reading we can tell how much pressure is being put on the sensor.</p>

            <br/>
            <br/>

            <Button text='DEMO'/>
        </div>
    );
}

export default StrainLessonPlan