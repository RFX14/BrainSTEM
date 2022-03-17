import './../../../App.css';
import image1 from './../thermistor/imagesAdv/image1.png';
import image2 from './../thermistor/imagesAdv/image2.png';
import image3 from './../thermistor/imagesAdv/image3.png';
import image4 from './../thermistor/imagesAdv/image4.gif';
import image5 from './../thermistor/imagesAdv/image5.gif';
import image6 from './../thermistor/imagesAdv/image6.png';
import image7 from './../thermistor/imagesAdv/image7.png';
import Button from '../../Button';

const ThermistorAdvancedLessonPlan = () => {
    return (
        <div className='container'>
            <p>Now, if you were paying attention you might ask: “hold on. How are the voltage values turned into temperature??”.</p>

            <br />

            <p>Through testing, the manufacturers can learn the value of the resistor at a bunch of different temperatures. A table with the resistance of the thermistor we used at different temperatures is shown below. The temperatures are highlighted in blue and the resistance is highlighted in yellow. The unit used for resistance is called “Ohms” and uses the symbol Ω.</p>

            <img src={image1} height='500'/>

            <br/>
            <br/>

            <p>So we have this massive table of values, what does it look like if we were to graph the values of temperature versus the resistance? Lucky for you, we already did the work on that - look at the figure below.</p>

            <img src={image2} width='500'/>

            <br />
            <br />

            <p>That is an ugly curve. It also does not help us when we have the resistance value - you wouldn’t wanna look at a massive table or graph and track the resistance you are reading down. You want to be able to put it into a simple, and nice formula that makes things real easy for you. Oh, the resistance is 50 ohms? Well, just put 50 into this formula and get the temperature. That’s the goal. But how do we get there from this ugly curve?</p>

            <br />

            <p>OK let’s take a quick sidebar. Remember what parallel lines are? It’s ok, just look at the figure below. It’s just lines that NEVER touch. Believe it or not, there are parallel circuits.</p>

            <img src={image3} width='200'/>

            <br />
            <br />

            <p>There are essentially two main ways to arrange circuits - series and parallel. A parallel circuit has elements that are parallel to each other. Look at the figure below for an example of a parallel circuit with light bulbs.</p>

            <img src={image4}/>

            <br />
            <br />

            <p>Notice two things, the bulbs (main elements of the circuit here) are parallel to each other AND the circuit still works when you take out one of the bulbs.</p>
            
            <br />

            <p>A series circuit is when elements of a circuit are connected one after the other. Look at the figure below.</p>

            <img src={image5} />

            <br />
            <br />

            <p>Notice, the bulbs are placed one right next to the other and also that when you take out one bulb, the whole circuit breaks.</p>

            <br />

            <img src={image6} width='400'/>

            <br />
            <br />

            <p>OKAY. That was a long sidebar.</p>

            <br />

            <p>So what does this have to do with thermistors? Well, there is this weird phenomenon that happens to a thermistor when you put a regular resistor in parallel to it. It basically makes our graph more straight - as in linear. (Shown below)</p>

            <img src={image7} />

            <br />
            <br />

            <p>It basically pulls the values in the middle UP so the graph is more like a straight line. This allows us to make a linear equation so we can simply plug in our resistance into an easy equation.</p>
            
            <br />
            <br />

            <Button text='DEMO' link='/thermistor/demo2' />
        </div>
    );
}

export default ThermistorAdvancedLessonPlan;