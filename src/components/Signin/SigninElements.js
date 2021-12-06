import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  position: fixed;
  overflow: hidden;
  min-height: 692px;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  color: #fff;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  font-size: 32px;
  font-weight: 700;
  margin-top: 32px;
  margin-left: 32px;
  border-radius: 50%;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  border: 0.2em solid #fff;


  @media screen and (max-width: 480px) {
    margin-top: 8px;
    margin-left: 16px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  z-index: 1;
  width: 100%;
  height: auto;
  display: grid;
  margin: 0 auto;
  max-width: 400px;
  border-radius: 4px;
  padding: 80px 32px;
  background: #010101;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px;
  }
`;

export const FormH1 = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 40px;
`;

export const FormLabel = styled.label`
  color: #fff;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  border: none;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 32px;
  `;

export const FormButton = styled.button`
  color: #fff;
  border: none;
  font-size: 20px;
  padding: 16px 0;
  cursor: pointer;
  border-radius: 4px;
  background: #01bf71;
`;

export const Text = styled.span`
  color: #fff;
  font-size: 14px;
  margin-top: 24px;
  text-align: center;
`;
