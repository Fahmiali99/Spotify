import React, { useState } from "react";
import { RxSpeakerLoud } from "react-icons/rx";

function VolumControl() {
  const [sliderValue, setSliderValue] = useState(100);
  function handleSlider(e) {
    setSliderValue(e.target.value);
  }

  return (
    <div className="flex items-center">
      <RxSpeakerLoud className="pr-2 text-3xl" />
      <input
        id="small-range"
        type="range"
        value={sliderValue}
        onChange={handleSlider}
        className=" w-full h-1  rounded-lg appearance-none cursor-pointer range-sm "
        style={{
          background: `linear-gradient(to right, #1db954 ${sliderValue}%, ${sliderValue}%, #374151 100%)`,
        }}
      />
    </div>
  );
}

export default VolumControl;
