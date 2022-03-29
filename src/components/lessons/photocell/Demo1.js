import '../../lib/dropdownStyles.css';
import SerialPlot from "../../SerialPlot";
import '../../../App.css';

const PhotocellDemo1 = () => {
    // ! UPDATE with proper conversions
    function getVoltage(adcValue) {
        const RESISTOR = 10000;
        const resistorValue = RESISTOR / (1023.0 / adcValue - 1.0);
        const voltage = .0005 * resistorValue;

        return voltage;
    }

    // ! UPDATE with proper conversions
    function getConverted(adcValue) {
        const voltage = getVoltage(adcValue);
        const converted = -1.67e-3 * voltage + 42;

        return converted;
    }

    return (
        <div>
            <div className='container2'>
                <p>Try obsuring the photocell by different amounts, and notice how the voltage affects the LED's brightness!</p>
            </div>
            
            <SerialPlot useConvertedValue={false} getVoltageValue={getVoltage} getConvertedValue={getConverted} sensor='2'/>
        </div>
    );
}

export default PhotocellDemo1