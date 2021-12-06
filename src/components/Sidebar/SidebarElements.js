import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 100%;
  display: grid;
  position: fixed;
  background: #0d0d0d;
  align-items: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0%" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  top: 1.2rem;
  outline: none;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  background: transparent;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  text-align: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  color: #fff;
  display: flex;
  cursor: pointer;
  list-style: none;
  font-size: 1.5rem;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #01bf71;
    transition: 0.2s;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border: none;
  outline: none;
  color: #010606;
  font-size: 16px;
  cursor: pointer;
  padding: 16px 64px;
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #fff;
    transition: all 0.2s ease-in-out;
  }
`;
