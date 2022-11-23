import styled from "styled-components";
import theme from "../../themes/theme";
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
  text-align: center;
  padding: 4px 16px;
  z-index: 1;
  cursor: pointer;
  line-height: ${({ size }) =>
    (size === "sm" && "18px") ||
    (size === "md" && "24px") ||
    (size === "lg" && "26px")};
  font-size: ${({ size }) =>
    (size === "sm" && `${theme.fontSizes.xxs}`) ||
    (size === "md" && `${theme.fontSizes.xs}`) ||
    (size === "lg" && `${theme.fontSizes.sm}`)};
  color: ${({ variant }) =>
    variant === "outlined"
      ? `${theme.colors.grey700}`
      : `${theme.colors.white}`};
  background-color: ${({ variant }) =>
    variant === "outlined" ? "transparent" : `${theme.colors.mainBlue800}`};
  border: ${({ variant }) =>
    variant === "outlined"
      ? `1px solid ${theme.colors.grey700}`
      : `1px solid ${theme.colors.mainBlue800}`};
  transition: transform 0.1s ease-out;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "contained" ? `${theme.colors.mainBlue900}` : "transparent"};
  }

  &:focus,
  &:active {
    outline: 2px solid ${theme.colors.mainBlue400};
    border-radius: 0.2em;
    transform: scale(1.03);
    background-color: ${({ variant }) =>
      variant === "contained" ? `${theme.colors.mainBlue800}` : "transparent"};
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    width: ${({ width }) => width};
    padding: 4px 0;
  }
`;
