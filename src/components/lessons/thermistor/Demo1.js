import '../../lib/dropdownStyles.css';
import SerialPlot from "../../SerialPlot";

const ThermistorDemo1 = () => {
    function getVoltage(adcValue) {
        const RESISTOR = 10000;
        const resistorValue = RESISTOR / (1023.0 / adcValue - 1.0);
        const voltage = .0005 * resistorValue;

        return voltage;
    }

    function getConverted(adcValue) {
        const voltage = getVoltage(adcValue);
        const converted = -1.67e-3 * voltage + 42

        return converted;
    }

    return (
        <div>
            <SerialPlot useConvertedValue={true} getVoltageValue={getVoltage} getConvertedValue={getConverted} sensor='1' convertedUnits={'Farenheit'}/>
            <SerialPlot useConvertedValue={false} getVoltageValue={getVoltage} getConvertedValue={getConverted} sensor='1' convertedUnits={'Farenheit'}/>
        </div>
    );
}

export default ThermistorDemo1