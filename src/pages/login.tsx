"use client";

import styled from "styled-components";

import DiscordLogo from "../assets/images/discord.svg";
import Logo from "../components/atoms/Logo";
import { Link } from "react-router-dom";

export default function Login() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <>
      <Wrapper>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <Logo readOnly />

            <Button to={`${import.meta.env.VITE_API_URL}/auth/discord`}>
              <img src={DiscordLogo} alt="discord" />
              <span>디스코드로 로그인하기</span>
            </Button>
          </Form>
        </FormWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100dvh;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
  flex: 1;
  max-width: 360px;

  border: 1px solid #dbdbdb;
  background-color: white;
  border-radius: 20px;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Button = styled(Link)`
  width: 100%;
  padding: 16px 0;

  border: 1px solid #e2e2e2;
  background-color: #fffbf5;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 8px;
  cursor: pointer;
`;
