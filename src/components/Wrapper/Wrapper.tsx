import React, { FC } from "react";
import { MainWrapper } from "./Wrapper.styled";

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Wrapper;
