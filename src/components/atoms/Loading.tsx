import styled, { keyframes } from "styled-components";

interface LoadingProps {
  $size?: string;
}
export function Loading({ $size = "48px" }: LoadingProps) {
  return (
    <Container $size={$size}>
      <Loader />
    </Container>
  );
}

const Container = styled.div<LoadingProps>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};

  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const RotateAnimation = keyframes`
  100% {transform: rotate(360deg)}
`;

const ClipFixAnimation = keyframes`
  0%, 100% {clip: rect(0px, 48px, 48px, 24px)}
  25% {clip: rect(0px, 48px, 48px, 0px)}
  50% {clip: rect(24px, 48px, 48px, 0px)}
  75% {clip: rect(24px, 48px, 48px, 24px)}
`;

const Loader = styled.span`
  width: 100%;
  height: 100%;

  max-width: 48px;
  max-height: 48px;

  border-radius: 50%;
  position: relative;
  animation: ${RotateAnimation} 1s linear infinite;

  &::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #fff;
    animation: ${ClipFixAnimation} 2s linear infinite;
  }
`;
