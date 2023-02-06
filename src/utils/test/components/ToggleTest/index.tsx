import React, { useState } from 'react';
import Toggle from '../../../../components/Toggle';


const ToggleTest: React.FC = () => {

  const [isOn, setsOn] = useState(false);

  const toggleSwitch = () => {
    setsOn(!isOn);
  }

  return (
    <Toggle isOn={true} toggleSwitch={toggleSwitch} />
  );
}

export default ToggleTest;