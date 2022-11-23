import React, { FC } from "react";
import { Title } from "./HeroTitle.styled";

type HeroTitleProps = {
  children: string;
};

const HeroTitle: FC<HeroTitleProps> = ({ children }) => {
  return <Title>{children}</Title>;
};

export default HeroTitle;
