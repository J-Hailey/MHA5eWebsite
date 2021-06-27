import React, {useState} from "react";
import Video from '../../videos/data.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false)
  
  const onHover = () => {
      setHover(!hover)
  }


  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
          <HeroH1>MHA 5e WebBook</HeroH1>
          <HeroP>
              "The Ones Who Smile Are the Strongest"
          </HeroP>
          <HeroBtnWrapper>
              <Button to="#" onMouseEnter={onHover} onMouseLeave={onHover}> 
                  Start Reading {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
          </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
