import styled from "styled-components";
import theme from "../../themes/theme";
import { SectionTitleProps } from "./SectionTitle";

export const Title = styled.h2<SectionTitleProps>`
  color: ${theme.colors.grey700};
  font-size: ${theme.fontSizes.lg};
  line-height: 38px;
  font-weight: ${theme.fontWeights.medium};
  margin-bottom: 16px;
  text-align: ${({ align }) => align};

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.xl};
    line-height: 48px;
  }
`;
