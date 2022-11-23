import React, { FC } from "react";
import { StyledText } from "./Text.styled";

export type TextProps = {
  children: string;
  color: string;
  size: "xs" | "sm" | "md";
  align?: string;
};

const Text: FC<TextProps> = (
  { children, color, size, align = "left" },
  props
) => {
  return (
    <StyledText color={color} size={size} align={align} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
