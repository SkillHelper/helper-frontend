import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export interface ModalProps {
  state: [boolean, () => void];
}

export interface Props extends PropsWithChildren {
  state: [boolean, () => void];
}

export default function BaseModal({ children, state }: Props) {
  const [isOpen, toggleIsOpen] = state;

  return (
    <React.Fragment>
      {isOpen && (
        <>
          <Background onClick={toggleIsOpen} />
          <Container>{children}</Container>
        </>
      )}
    </React.Fragment>
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);

  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 560px;
  padding: 24px;

  z-index: 1000;

  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
`;
