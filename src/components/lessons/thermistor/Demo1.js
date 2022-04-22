import '../../lib/dropdownStyles.css';
import SerialPlot from "../../SerialPlot";
import '../../../App.css';

// ! Make sure PCB uses my way of setup
const ThermistorDemo1 = () => {
    function getVoltage(adcValue) {
        const RESISTOR = 10000;
        const resistorValue = RESISTOR / (1023.0 / adcValue);
        const voltage = (.00025 * resistorValue) % 5;

        return voltage;
    }

    //! Using Linear Approx. as the real is too slow
    function getConverted(adcValue) {
        const RESISTOR = 10000;
        const resistorValue = RESISTOR / (1023.0 / adcValue);
        console.log(resistorValue);
        /*
        const convertedCelsius = 77.6 - (22.7 * Math.log(resistorValue / 1000));
        const converted = (convertedCelsius * (9/5)) + 32; 
        */
        const convertedCelsius = (-1.64*(resistorValue / 1000)) + 44.5;
        const converted = (convertedCelsius * (9/5)) + 32; 

        return converted;
    }

    return (
        <div>
            <div className='container2'>
                <p>Hold the thermistor in your hands and notice the relationship between voltage and temperature!</p>
            </div>
            
            <SerialPlot useConvertedValue={true} getVoltageValue={getVoltage} getConvertedValue={getConverted} sensor='1' convertedUnits={'Temp. Farenheit'}/>
            <SerialPlot useConvertedValue={false} getVoltageValue={getVoltage} getConvertedValue={getConverted} sensor='1' convertedUnits={'Temp. Farenheit'}/>
        </div>
    );
}

export default ThermistorDemo1