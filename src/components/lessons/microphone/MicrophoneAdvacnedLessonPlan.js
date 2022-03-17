import './../../../App.css';
import image1 from './../microphone/imagesAdv/image1.png';
import image2 from './../microphone/imagesAdv/image2.gif';
import Button from '../../Button';

// ! Mid lesson plan demo?
const MicrophoneAdvancedLessonPlan = () => {
    return (
        <div className='container'>
            <p>Now so far we have talked about how sound is converted to voltage, but if we record our voice on a microphone and then play the recording back it’s not a bunch of voltages - it's sound! So how are voltages converted back to sound? There are actually quite a few steps in that process so let’s walk through them.</p>

            <br />

            <p>First, let’s talk about the voltages themselves. How often are we recording these voltages? For example, while you say the sentence “microphones are cool”, you are actually making a bunch of sounds at different frequencies and amplitudes - it's not all one sound (that would just be a grunt).</p>

            <br />

            <p>So how often should we record the voltages? The rate at which you record these voltages is called the sampling rate - the rate at which you take a sample of voltage coming from the capacitor in your microphone. So if we were to only take one sample of you saying a sentence it would just be a grunt. If you were to instead take a <em>sample</em> at the start of every word in the sentence “microphones are cool” you would record “m”, “a” and “c”. What we are getting at is this: the more often you take samples the more you capture and so the better the quality of the mic. If we were to compare low sampling rates and high sampling rates it would look like the graph below:</p>

            <br />

            <img src={image1} />

            <br />
            <br />

            <p>OK so we have our amplified sampled voice…what now?  Imagine this scenario: you are talking into your microphone and out of nowhere a high pitched, high frequency alarm goes off.</p>

            <br />

            <img src={image2} width='250'/>

            <br />
            <br />

            <p>The human voice has a frequency between 125 hertz and 8000 hertz (hertz are the units for frequency with symbol Hz). Let’s say this alarm is at 10,000 Hz. Now obviously, you don’t want to record this alarm going off - it’s not relevant at all. Thankfully, we can simply remove it! We can install filters, either physical (inside the microphone itself) or digital (with our code) to remove frequencies above or below a certain range. We know the human voice is only between 125 Hz and 8000 Hz, so we can just delete all the data that was above or below those frequencies because its not human sounds!</p>

            <br />

            <p>So why are we bringing up alarms? It’s not exactly a common occurrence in everyday life. Well, microphones (and other sensors) are not perfect. Sometimes, they will RANDOMLY read a non-existent value that is unusually high or low. It’s ok, no one is perfect - we can easily work around this random noise.( It’s not called noise just for microphones by the way, random errors with other sensor readings are also called noise, just in the case of microphones it might literally be noise) We can work around the random noise by simply ignoring frequencies above and below certain frequencies.</p>

            <br />

            <p>This is a part of a process called filtering - like with filtering stones out of water, we are filtering the noise out of our recordings.</p>

            <br />
            <br />

            <Button text='DEMO' link='/microphone/demo2' />
    </div>
    );
}

export default MicrophoneAdvancedLessonPlan;