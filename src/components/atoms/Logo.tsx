import { Link } from "react-router-dom";
import styled from "styled-components";

function LogoSvg() {
  return (
    <svg
      style={{
        width: "68px",
      }}
      viewBox="0 0 370 235"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M151.391 33.9979L184.891 0.49758L369.143 184.749L335.643 218.25L151.391 33.9979Z"
        fill="#161B21"
      />
      <path
        d="M0.639038 184.749L60.9397 124.449L94.44 157.949L34.1394 218.25L0.639038 184.749Z"
        fill="#161B21"
      />
      <path
        d="M107.84 77.5483L184.891 0.497548L218.391 33.9979L141.341 111.049L107.84 77.5483Z"
        fill="#161B21"
      />
      <path
        d="M218.391 201.5L184.891 235L0.638936 50.7481L34.1393 17.2478L218.391 201.5Z"
        fill="#F3A950"
      />
      <path
        d="M369.143 50.7482L308.842 111.049L275.342 77.5484L335.642 17.2478L369.143 50.7482Z"
        fill="#F3A950"
      />
      <path
        d="M261.942 157.949L184.891 235L151.39 201.5L228.441 124.449L261.942 157.949Z"
        fill="#F3A950"
      />
    </svg>
  );
}

interface LogoProps {
  readOnly?: boolean;
}
export default function Logo({ readOnly = false }: LogoProps) {
  return (
    <LogoContainer as={readOnly ? "div" : "a"} to={"/"}>
      <LogoSvg />
      <h1>기능반</h1>
    </LogoContainer>
  );
}

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  padding: 16px;

  h1 {
    font-size: 28px;
    font-weight: 700;
  }
`;
