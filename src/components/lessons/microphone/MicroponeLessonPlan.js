import './../../../App.css';
import image1 from './../microphone/images/image1.gif';
import image2 from './../microphone/images/image2.png';
import image3 from './../microphone/images/image3.png';
import image4 from './../microphone/images/image4.png';
import image5 from './../microphone/images/image5.png';
import Button from '../../Button';

/*
    Change <em> tag to be more like google doc
*/

const MicrophoneLessonPlan = () => {
    return (
        <div className='container'>
            <p>To understand how microphones work, we need to first understand what sound actually is. Sound, surprisingly, is made up of waves!</p>

            <br/>

            <img src={image1} width='500'></img>

            <br/>
            <br/>

            <p>Unlike waves in the ocean, however, you can’t actually <em>see</em> sound waves.</p>

            <br/>

            <img src={image2} width='500'></img>

            <br/>
            <br/>

            <p>There are a couple characteristics that we need to know about sound waves - frequency and amplitude. Each type of sound has a unique frequency and amplitude. Your voice has a different frequency and amplitude than mine. The sound of a basketball hitting the floor has its own unique amplitude and frequency. Think of it as a unique ID number.</p>

            <br/>

            <p>Frequency is essentially the speed of the sound wave and can be understood by seeing the picture below.</p>

            <br/>

            <img src={image3} width='500'></img>

            <br/>
            <br/>

            <p>When we say that someone has a high voice (generally associated with women), we are talking about them having a high frequency. Whereas, if we say someone has a low or deep voice then we are talking about their voice having a low frequency. For example, Morgan Freeman has a low frequency voice.</p>

            <br/>

            <img src={image4}></img>

            <br/>
            <br/>

            <p>Amplitude is the height of a wave, and is generally associated with how <em>loud</em> a sound is. If a sound wave has higher amplitude then it is louder. So when you are yelling, you are increasing the amplitude of <em>your</em> sound waves. On the other hand, if a sound wave has a low amplitude, then it is more quiet.</p>

            <br/>

            <img src={image5} width='500'></img>

            <br/>
            <br/>

            <p>So what does all this have to do with the microphone? The microphone that we are using has a device in it called the capacitor. The capacitor has two really tiny metal plates that are separated by a very small distance between them. When we are passing electricity through a capacitor, based on the distance between those two plates, the amount of electricity that comes out of the capacitor changes.</p>

            <br/>

            <p>Each time we speak into the microphone, we are sending sound waves to the tiny capacitor inside. Each sound wave moves the plates around, changing the distance between them. As the plate distances change, the voltages sent to the computer also change because the plates are moving around! This continuous change in voltage is then converted to sound on our computers.</p>
        </div>
    );
}

export default MicrophoneLessonPlan