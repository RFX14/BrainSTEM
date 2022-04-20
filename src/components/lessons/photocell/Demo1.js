import '../../lib/dropdownStyles.css';
import SerialPlot from "../../SerialPlot";
import '../../../App.css';

const PhotocellDemo1 = () => {
    function getVoltage(adcValue) {
        const voltage = (5/1024) * adcValue;
        return voltage;
    }

    // ! NOT USED
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
            
            <SerialPlot useConvertedValue={false} getVoltageValue={getVoltage} getConvertedValue={getConverted} sensor='4'/>
        </div>
    );
}

export default PhotocellDemo1