import React from "react";
import "./SigninElements";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";

const Signin = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">PL</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Connexion</FormH1>
            <FormLabel htmlFor="for">E-mail</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Mot de passe</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Se connecter</FormButton>
            <Text>Mot de passe oublié ?</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signin;
