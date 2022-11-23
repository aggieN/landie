import React, { FC } from "react";
import { StyledButton } from "./Button.styled";

export type ButtonProps = {
  label: string;
  width?: string;
  variant?: "contained" | "outlined";
  size?: "sm" | "md" | "lg";
};

const Button: FC<ButtonProps> = (
  { label, width = "160px", variant = "contained", size = "md" },
  props
) => {
  return (
    <StyledButton width={width} variant={variant} size={size} {...props}>
      {label}
    </StyledButton>
  );
};

export default Button;
