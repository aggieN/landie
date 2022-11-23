import styled from "styled-components";
import theme from "../../themes/theme";
import { Link as GatsbyLink } from "gatsby";

export const OuterWrapper = styled.div`
  width: 100%;
  background-color: ${theme.colors.mainBlue100};
  display: flex;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 60px 0 40px;
  flex-wrap: wrap;

  @media (min-width: ${theme.breakpoints.sm}) {
    justify-content: space-between;
  }
`;

export const SmallText = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.regular};
  line-height: 24px;
  color: ${theme.colors.grey400};
  width: 100%;
  text-align: center;
  margin-top: 32px;
  order: 3;

  @media (min-width: ${theme.breakpoints.sm}) {
    width: fit-content;
    order: 0;
    margin-top: 0;
    text-align: left;
  }
`;

export const NavAndIconsContainer = styled.div`
  border-top: 1px solid #cdd1d4;
  padding: 20px 0 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${theme.breakpoints.md}) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const NavItems = styled.ul`
  list-style: none;
  text-decoration: none;
  display: flex;
  width: 245px;
  justify-content: space-between;
`;

export const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: ${theme.colors.mainBlue300};
  font-weight: ${theme.fontWeights.regular};
  line-height: 24px;
  font-size: ${theme.fontSizes.xs};
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  width: 240px;
  justify-content: space-between ;
  @media (min-width: ${theme.breakpoints.md}) {
    margin-top: 0;
  }
`;
