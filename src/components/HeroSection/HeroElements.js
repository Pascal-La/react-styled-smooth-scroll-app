import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  display: flex;
  max-width: 1200px;
  padding: 8px 24px;
  position: absolute;
  align-items: center;
  flex-direction: column;
`;

export const HeroH1 = styled.div`
  color: #fff;
  font-size: 32px;
  text-align: center;

  @media screen and (min-width: 480px) {
    font-size: 40px;
  }

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const HeroP = styled.p`
  color: #fff;
  font-size: 18px;
  margin-top: 24px;
  max-width: 600px;
  text-align: center;

  @media screen and (min-width: 480px) {
    font-size: 24px;
  }
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  align-items: center;
  flex-direction: column;
`;

export const ArrowForward = styled(MdArrowForward)`
  font-size: 20px;
  margin-left: 8px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  font-size: 20px;
  margin-left: 8px;
`;
