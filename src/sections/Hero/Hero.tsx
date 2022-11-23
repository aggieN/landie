import React from "react";
import {
  Buttons,
  ImageDesktop,
  ImageMobile,
  InnerWrapper,
  OuterWrapper,
} from "./Hero.styled";
import Wrapper from "../../components/Wrapper/Wrapper";
import { StaticImage } from "gatsby-plugin-image";
import HeroTitle from "../../components/HeroTitle/HeroTitle";
import Text from "../../components/Text/Text";
import theme from "../../themes/theme";
import { HERO_TITLE, HERO_TEXT as paragraphs } from "../../content";
import Button from "../../components/Button/Button";

const Hero = () => {
  return (
    <OuterWrapper>
      <ImageDesktop>
        <StaticImage
          src="../../images/hero-image.svg"
          alt=""
          layout="fullWidth"
          placeholder="blurred"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            zIndex: 0,
            width: '60%',
            maxWidth: "1100px",
            maxHeight: "1100px"
          }}
        />
      </ImageDesktop>
      <ImageMobile>
        <StaticImage
          src="../../images/hero-image.svg"
          alt=""
          placeholder="blurred"
          style={{
            zIndex: 0,
            width: "90%",
          }}
        />
      </ImageMobile>
      <Wrapper>
        <InnerWrapper>
          <HeroTitle>{HERO_TITLE}</HeroTitle>
          {paragraphs.map((paragraph) => (
            <Text
              key={paragraph}
              size="md"
              color={`${theme.colors.mainBlue500}`}
            >
              {paragraph}
            </Text>
          ))}
          <Buttons>
            <Button label="Purchase UI Kit" size="lg" width="189px" />
            <Button
              label="Learn more"
              size="lg"
              variant="outlined"
              width="189px"
            />
          </Buttons>
        </InnerWrapper>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Hero;
