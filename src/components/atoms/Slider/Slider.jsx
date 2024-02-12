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
      value={value}
      onChange={handleChange}
      min={min}
      focusThumbOnChange={false}
      max={max}
    >
      <SliderTrack
        h={"8px"}
        borderRadius={"8px"}
        background={"var(--background-dark)"}
      >
        <SliderFilledTrack background={"var(--primary)"} />
      </SliderTrack>
      <SliderThumb
        bg={"var(--primary)"}
        border={"6px solid var(--primary-light)"}
        p={"12px"}
      />
    </ChakraSlider>
  );
};

export default Slider;
