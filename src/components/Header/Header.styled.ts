import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import theme from "../../themes/theme";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
  align-items: center;
  z-index: 1;
  position: relative;
  width: 100%;
`;

export const NavItems = styled.ul`
  display: none;
  list-style: none;
  text-decoration: none;

  @media (min-width: ${theme.breakpoints.md}) {
    display: flex;
    width: 245px;
    justify-content: space-between;
  }
`;

export const SideNav = styled.ul<{ isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  text-decoration: none;
  width: 80px;
  background-color: ${theme.colors.white};
  position: absolute;
  top: 64px;
  left: 0;
  z-index: 9 !important;
  height: 110px;
  border-radius: 0.2rem;
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? "translateX(0)" : "translateX(-150%)"};
  transition: transform 0.3s ease-in-out;
  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

export const HamburgerMenu = styled.button<{ isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 4rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;

  div {
    width: 1.5rem;
    height: 0.2rem;
    background-color: ${theme.colors.mainBlue900};
    border-radius: 5px;
    position: relative;

    :first-child {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? "rotate(45deg)" : "rotate(0)"};
      transform-origin: 0.5px;
    }

    :nth-child(2) {
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? "rotate(-45deg)" : "rotate(0)"};
        transform-origin: 1px;
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

export const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: ${theme.colors.mainBlue500};
  font-weight: ${theme.fontWeights.regular};
  line-height: 24px;
`;
