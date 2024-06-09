import styled from "styled-components";
import DashboardLayout from "../components/layout/DashboardLayout";

export default function Explanation() {
  return (
    <DashboardLayout>
      <Wrapper>
        <TitleContent>
          <Title>풀이 모음</Title>

          <Description>
            지난 대회에서 작성된 풀이를 확인할 수 있습니다.
          </Description>
        </TitleContent>
      </Wrapper>
    </DashboardLayout>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 36px;

  gap: 24px;
`;

const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h1`
  color: #1f242b;

  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
`;

const Description = styled.p`
  color: #718198;

  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
`;
