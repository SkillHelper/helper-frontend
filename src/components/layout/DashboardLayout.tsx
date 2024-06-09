import React from "react";
import Sidebar from "../common/Sidebar";
import styled from "styled-components";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Sidebar />
      <Wrapper>{children}</Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  display: flex;

  width: 100vw;

  padding-top: 64px;
  padding-left: 280px;
`;
