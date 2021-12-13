import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.div`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  top: 0;
  z-index: 10;
  height: 80px;
  display: flex;
  font-size: 1rem;
  position: sticky;
  margin-top: -80px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  z-index: 1;
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0 24px;
  max-width: 1100px;
  justify-content: space-between;
`;

export const NavLogo = styled.a`
  width: 2.5em;
  display: flex;
  height: 2.5em;
  color: #01bf71;
  margin: auto 0;
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 24px;
  font-weight: bold;
  border-radius: 50%;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  justify-self: flex-start;
  border: 0.2em solid #01bf71;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    top: 0;
    right: 0;
    color: #fff;
    display: block;
    cursor: pointer;
    position: absolute;
    font-size: 1.8rem;
    transform: translate(-100%, 60%);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  align-items: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  height: 100%;
  display: flex;
  cursor: pointer;
  padding: 0 1rem;
  align-items: center;
  text-decoration: none;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border: none;
  outline: none;
  color: #010606;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 22px;
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #010606;
    background: #fff;
    transition: all 0.2s ease-in-out;
  }
`;
