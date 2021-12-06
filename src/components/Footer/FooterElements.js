import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1100px;
  padding: 48px 24px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  color: #fff;
  width: 160px;
  display: flex;
  text-align: left;
  margin: 16px 64px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 420px) {
    margin: 0;
    width: 100%;
    padding: 10px;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled.div`
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
  max-width: 1000px;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 40px auto 0;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  display: flex;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-bottom: 16px;
  justify-self: start;
  text-decoration: none;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
