import './../../../App.css';
import image1 from './../thermistor/images/image1.png';
import image2 from './../thermistor/images/image2.gif';
import image3 from './../thermistor/images/image3.png';
import image4 from './../thermistor/images/image4.gif';
import image5 from './../thermistor/images/image5.png';
import Button from '../../Button';

const PhotocellLessonPlan = () => {
    return (
    <div className='container'>
      <p>At this point, we know that our phone’s batteries get charged by electricity when we plug our chargers into the wall, but what actually is electricity? It is actually very similar to a hose with water running through it. You use the tap to control the pressure of the water coming out of the hose. The size of the hose matters because the wider it is the more water that can flow through it.</p>
      
      <br/>

      <p>Electricity is like the water in the hose. It is measured in Volts (the symbol is V) - you have probably seen that word before on electrical appliances around your house or on your batteries. The higher the voltage, the more energy we are giving to the device, so as you increase the voltage, a lightbulb can get brighter (up to a certain point).</p>

      <br/>

      <img src={image4}></img>

      <br/>

      <p> Now let's say you wanted to slow the water down but without touching the tap, how would you do that? Well you would squeeze the hose! Electricity is the same way, sometimes we want to decrease how much Voltage we are giving something but we have no way to control the source of our electricity, so we use resistors to squeeze the electricity pipe. Resistors are devices with a certain amount of resistance, the higher the resistance the stronger the squeeze.</p>

      <br/>

      <img src={image1}></img>
      
      <br/>

      <img src={image3} width="500"></img>
      <img src={image5} width="500"></img>
      <img src={image2} width="500"></img>

      <br/>

      <p>What does all this have to do with a light sensor? Well, a light sensor has a device called the photocell within it. The photocell is a type of resistor (the hose squeezer) that changes resistance based on the amount of light on it. So, if there is a bright light on the photocell, then it squeezes way harder than if it had no light on it. So the light sensor uses the photocell to measure the amount of light by measuring the voltage (or the pressure of the water) after it is squeezed (a lot or not at all) by the photocell!</p>
      
      <br/>
      <br/>
      
      <Button text='DEMO' link='/photocell/demo1' />
    </div>
  );
}

export default PhotocellLessonPlan