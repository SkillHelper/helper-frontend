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

  padding: 64px 0px 64px 280px;
`;
