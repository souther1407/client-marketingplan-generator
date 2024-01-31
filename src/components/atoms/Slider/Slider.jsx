import React from "react";
import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/slider";

const Slider = () => {
  return (
    <ChakraSlider defaultValue={30} h={"34px"}>
      <SliderTrack h={"16px"} borderRadius={"8px"} background={"var(--black)"}>
        <SliderFilledTrack background={"var(--white)"} />
      </SliderTrack>
      <SliderThumb />
    </ChakraSlider>
  );
};

export default Slider;
