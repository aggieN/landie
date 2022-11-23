import React, { FC } from "react";
import { Title } from "./SectionTitle.styled";

export type SectionTitleProps = {
  children: string;
  align?: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ children, align = "left" }) => {
  return <Title align={align}>{children}</Title>;
};

export default SectionTitle;
