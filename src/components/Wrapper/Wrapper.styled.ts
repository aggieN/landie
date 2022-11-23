import styled from "styled-components";
import theme from '../../themes/theme';

export const MainWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 16px;
  z-index: 1;

  @media(min-width: ${theme.breakpoints.md}) {
    padding: 0 80px;
  }

  @media(min-width: ${theme.breakpoints.lg}) {
    padding: 0 132px;
  }

  @media(min-width: ${theme.breakpoints.xl}) {
    padding: 0 162px;
  }
`;
