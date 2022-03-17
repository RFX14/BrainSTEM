import './../../../App.css';
import image1 from './../pir/imagesAdv/image1.png';
import image2 from './../pir/imagesAdv/image2.png';
import image3 from './../pir/imagesAdv/image3.png';
import image4 from './../pir/imagesAdv/image4.png';
import image5 from './../pir/imagesAdv/image5.png';
import image6 from './../pir/imagesAdv/image6.png';
import image7 from './../pir/imagesAdv/image7.png';
import image8 from './../pir/imagesAdv/image8.png';
import image9 from './../pir/imagesAdv/image9.png';
import Button from '../../Button';

const PIRAdvancedLessonPlan = () => {
    return (
        <div className='container'>
            <p>In the beginner lesson, we talked about how PIR sensors work based on the difference in temperature between pyroelectric sensors. It works based on the fact that living things emit heat, which makes them stand out from non-living objects which are comparatively cold. So at minimum, a PIR sensor needs two pyroelectric sensors.</p>

            <br />

            <p>Say we were looking at the most basic PIR sensor with two pyroelectric sensors (shown below). Because we are measuring the difference between the two sensors, the hot object has to come in from the left or right because if it came in from the top or bottom, both the sensors would read the temperature and there would be <em>no temperature difference between</em> the two. (Red shapes are the pyroelectric sensors)</p>

            <br />

            <img src={image1} width='350'/>

            <img src={image2} width='350'/>

            <br />
            <br />

            <p>OK so what if we added more sensors? If we add sensors on the top and bottom too, we are covering more directions and angles and can now tell an object has passed if it comes from above or below.</p>

            <br />

            <img src={image3} width='350'/>
            <img src={image4} width='350'/>

            <br />
            <br />

            <p>So the more pyroelectric sensors in a PIR sensor the better, because it means more angles are covered. The more sensors we have, the wider our angle of coverage.</p>

            <br />

            <p>But what about distance? It does not matter how many angles we cover if the range of the sensor is only, like, 2 inches in front of it - the robber would just walk AROUND it. Indoor PIR sensors can detect up to around 20 meters in front of them, whereas outdoor sensors can detect up to 150 meters. So what’s the difference maker? It’s a LENS.</p>

            <br />

            <img src={image5} width='400'/>

            <br />
            <br />

            <p>The lens makes a HUGE difference to detectable range. For example, a PIR sensor without a lens can see 2 meters in front of it, but the same sensor with a lens attached to it can see up to 5 meters in front of it. That is a 150% increase in range! The specific lenses used in PIR sensors are called fresnel lenses.</p>

            <br />

            <p>Normal lenses are solid pieces of glass that form a semi-circle - these are the type you would see in glasses.</p>

            <br />

            <img src={image6} height='350'/>

            <br />
            <br />

            <p>Fresnel lenses, the curvature is sliced, and then put on a flat surface to make it look like the lens shown below.</p>

            <br />

            <img src={image7} height='350'/>

            <br />
            <br />

            <p>This type of lens is cheaper because it uses less material while also covering the same area as a regular lens!</p>

            <br />

            <p>Using this lens, we can increase the range of our PIR. Look at the figures below</p>
            
            <br />

            <p>Where before, it would only cover this much area:</p>

            <br />

            <img src={image8} width='350'/>

            <br />
            <br />

            <p>We can now cover so much more area using the fresnel lens:</p>

            <br />

            <img src={image9} width='500'/>

            <br />
            <br />

            <Button text='DEMO' link='/motion/demo2' />
        </div>
    );
}

export default PIRAdvancedLessonPlan;