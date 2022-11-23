import styled from "styled-components";
import theme from "../../themes/theme";

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;

  @media (min-width: ${theme.breakpoints.md}) {
    height: 90vh;
  }

  @media (min-width: ${theme.breakpoints.xxl}) {
    min-height: 960px;
  }
`;

export const InnerWrapper = styled.div`
  max-width: 539px;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin-top: 39px;
  justify-content: space-between;
  height: 90px;
  max-width: 408px;

  @media (min-width: ${theme.breakpoints.sm}) {
    height: fit-content;
    margin-top: 69px;
    flex-direction: row;
  }
`;

export const ImageMobile = styled.div`
  display: block;
  text-align: right;
  margin-top: -100px;
  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

export const ImageDesktop = styled.div`
  display: none;
  @media (min-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;
