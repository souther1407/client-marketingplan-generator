import React from "react";
import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/slider";

const Slider = ({ id, onChange, value = 30, min = 0, max = 100, step = 1 }) => {
  const handleChange = (value) => {
    onChange(id, value);
  };
  return (
    <ChakraSlider
      defaultValue={value}
      h={"34px"}
      onChange={handleChange}
      min={min}
      max={max}
      step={step}
    >
      <SliderTrack
        h={"16px"}
        borderRadius={"8px"}
        background={"var(--background)"}
      >
        <SliderFilledTrack background={"var(--primary-light)"} />
      </SliderTrack>
      <SliderThumb
        bg={"var(--background)"}
        border={"6px solid var(--primary-light)"}
        p={"12px"}
      />
    </ChakraSlider>
  );
};

export default Slider;
