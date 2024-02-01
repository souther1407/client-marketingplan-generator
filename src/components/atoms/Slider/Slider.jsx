import React from "react";
import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/slider";

const Slider = ({ id, onChange, value = 30, min = 0, max = 100 }) => {
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
    >
      <SliderTrack h={"16px"} borderRadius={"8px"} background={"var(--black)"}>
        <SliderFilledTrack background={"var(--white)"} />
      </SliderTrack>
      <SliderThumb />
    </ChakraSlider>
  );
};

export default Slider;
