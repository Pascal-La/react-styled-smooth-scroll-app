import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  z-index: 1;
  width: 100%;
  display: grid;
  height: 860px;
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1100px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: minimax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2' `};
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  padding: 0 15px;
  margin-bottom: 15px;
`;

export const Column2 = styled.div`
  grid-area: col2;
  padding: 0 15px;
  margin-bottom: 15px;
`;

export const TextWrapper = styled.div`
  padding-top: 0;
  max-width: 540px;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  margin-bottom: 16px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

export const Heading = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 24px;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  max-width: 440px;
  line-height: 24px;
  margin-bottom: 35px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  height: 100%;
  max-width: 555px;
`;

export const Img = styled.img`
  width: 100%;
  padding-right: 0;
  margin: 0 0 10px 0;
`;
