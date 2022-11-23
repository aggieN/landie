import React, { FC, useState } from "react";
import {
  Navbar,
  NavItems,
  Link,
  HamburgerMenu,
  SideNav,
} from "./Header.styled";
import { NAVIGATION_LINKS as navLinks } from "../../content";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const Header: FC = () => {
  const [isMenuOpen, toggleIsMenuOpen] = useState(false);

  const handleOnClick = () => {
    toggleIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar>
      <HamburgerMenu onClick={handleOnClick} isMenuOpen={isMenuOpen}>
        <div />
        <div />
        <div />
      </HamburgerMenu>
      <SideNav isMenuOpen={isMenuOpen}>
        {navLinks.map(({ id, label, href }) => (
          <li key={id}>
            <Link to={href}>{label}</Link>
          </li>
        ))}
      </SideNav>
      <NavItems>
        {navLinks.map(({ id, label, href }) => (
          <li key={id}>
            <Link to={href}>{label}</Link>
          </li>
        ))}
      </NavItems>
      <Logo />
      <Button label="Buy now" size="md" />
    </Navbar>
  );
};

export default Header;
