import React from "react";
import Slider from "react-slick";
import { Box, Heading, Text, Button } from '@chakra-ui/react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div style={{ position: 'relative' }}>
          <Box style={{ position: 'absolute', color: 'white', width: '3%', marginLeft: '3em', marginTop: '1em' }}>
            <Heading size={'xl'}>Sell your Products</Heading>
            <Text fontSize='xl'>to 182 million customers across 190 Countries</Text>
            <Button size='lg' colorScheme="white" variant='outline' borderRadius={'5em'} mt={'2em'}> Sell Globally</Button>
          </Box>
          <img src="https://i.ebayimg.com/images/g/F6QAAOSwQcJfIpcl/s-l1600.webp" alt="" />
        </div>

        <div style={{position: 'relative'}}>
          <Box style={{ position: 'absolute', color: 'black', width: '4%', marginLeft: '3em', marginTop: '1em' }}>
            <Heading size={'xl'}>Your favourite cards, guaranteed</Heading>
            <Text fontSize='xl'>Collecting is backed by the eBay Money Back Guarantee.</Text>
            <Button size='lg' colorScheme="black" variant='outline' borderRadius={'5em'} mt={'2em'}> Shop cards</Button>
          </Box>
          <img src="https://i.ebayimg.com/00/s/NDEyWDE2MDA=/z/rjkAAOSwUSlmQd--/$_57.PNG" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
