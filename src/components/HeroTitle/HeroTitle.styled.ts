import styled from "styled-components";
import theme from "../../themes/theme";

export const Title = styled.h1`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.grey700};
  line-height: 48px;
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: 1px;
  z-index: 1;
  margin-bottom: 20px;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.xxl};
    line-height: 66px;
  }
`;
