import React from "react";
import { Link as GatsbyLink } from "gatsby";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import Wrapper from "../../components/Wrapper/Wrapper";
import {
  FOOTER_COMPANY_NAME,
  NAVIGATION_LINKS as navLinks,
  SOCIAL_MEDIA_ICONS as socialIcons,
} from "../../content";
import {
  OuterWrapper,
  InnerWrapper,
  SmallText,
  NavAndIconsContainer,
  NavItems,
  Link,
  IconsContainer,
} from "./Footer.styled";

const Footer = () => {
  return (
    <OuterWrapper>
      <Wrapper>
        <InnerWrapper>
          <SmallText>{FOOTER_COMPANY_NAME}</SmallText>
          <Logo />
          <Button label="Purchase Now" size="sm" width="109px" />
        </InnerWrapper>
        <NavAndIconsContainer>
          <NavItems>
            {navLinks.map(({ id, label, href }) => (
              <li key={id}>
                <Link to={href}>{label}</Link>
              </li>
            ))}
          </NavItems>
          <IconsContainer>
            {socialIcons.map((icon, i) => (
              <GatsbyLink to="/">
                <img key={i} src={icon} />
              </GatsbyLink>
            ))}
          </IconsContainer>
        </NavAndIconsContainer>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Footer;
