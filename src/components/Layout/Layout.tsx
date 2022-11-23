import React, { FC } from "react";
import { MainContainer } from "./Layout.styled";

import Header from "../Header/Header";
import Wrapper from "../Wrapper/Wrapper";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <MainContainer>
      <Wrapper>
        <Header />
      </Wrapper>
      {children}
    </MainContainer>
  );
};

export default Layout;
