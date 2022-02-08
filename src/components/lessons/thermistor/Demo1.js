import TestSerial from "../../TestSerial";
import '../../lib/dropdownStyles.css';

const ThermistorDemo1 = () => {
    return (
        <div>
            <TestSerial useResistorValue={true} sensor='1'/>
            <TestSerial useResistorValue={false} sensor='1'/>
        </div>
    );
}

export default ThermistorDemo1