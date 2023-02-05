import React from 'react';
import { ImSpinner2 } from "react-icons/im";
import RenderIf from '../RenderIf';

type SpinnerType = {
  show: boolean
}

const Spinner = ({ show }: SpinnerType) => {
  return (
    <RenderIf isTrue={show}>
      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <ImSpinner2 className="inline mr-3 w-4 h-4 text-white animate-spin" />
      </span>
    </RenderIf>
  );
}

export default Spinner;