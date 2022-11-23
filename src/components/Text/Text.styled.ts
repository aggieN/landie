import styled from "styled-components";
import theme from "../../themes/theme";
import { TextProps } from "./Text";

export const StyledText = styled.p<TextProps>`
  margin-top: 8px;
  font-size: ${({ size }) =>
    (size === "xs" && `${theme.fontSizes.xxs}`) ||
    (size === "sm" && `${theme.fontSizes.sm}`) ||
    (size === "md" && `${theme.fontSizes.md}`)};
  color: ${({ color }) => color};
  line-height: ${({ size }) =>
    (size === "xs" && "18px") ||
    (size === "sm" && "26px") ||
    (size === "md" && "30px")};
  font-weight: ${theme.fontWeights.regular};
  text-align: ${({ align }) => align};
`;
