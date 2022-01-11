import './../../../App.css';
import image1 from './images/image1.png'
import image2 from './images/image2.gif'
import image3 from './images/image3.png'
import image4 from './images/image4.gif'
import image5 from './images/image5.png'
const ThermistorLessonPlan = () => {
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

      <img src={image3}></img>
      <img src={image5}></img>
      <img src={image2}></img>

      <br/>

      <p>So what does all this have to do with the thermometer? Thermometers have a type of resistor (the hose squeezer)  in them called the thermistor. Thermistors are different from regular resistors because their resistance is based on how hot or cold it is. So, when it is hotter outside, it squeezes way harder than if it was cold out. We can use a thermistor to then measure the temperature by simply measuring the voltage (or the pressure of the water) after it’s squeezed by the thermistor!</p>
      
    </div>
  );
}

export default ThermistorLessonPlan