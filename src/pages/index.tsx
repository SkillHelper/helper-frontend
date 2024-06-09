import styled from "styled-components";
import DashboardLayout from "../components/layout/DashboardLayout";
import { useNotices } from "../hooks/notice";
import MaterialIcon from "../components/atoms/MaterialIcon";

export default function Index() {
  const { data: notices } = useNotices();

  return (
    <DashboardLayout>
      <Wrapper>
        <TitleContent>
          <Title>마이스터넷</Title>

          <Description>
            마이스터넷의 기재된 기능경기대회 정보를 확인할 수 있습니다.
          </Description>
        </TitleContent>

        <ContentWrapper>
          {notices?.map((notice) => (
            <Content>
              <div>
                <p>
                  {notice.division} | {notice.date}
                </p>
                <h1>{notice.title}</h1>
              </div>

              {notice?.download && (
                <a target="_blank" href={notice.download}>
                  <MaterialIcon>download</MaterialIcon>
                  다운로드
                </a>
              )}
            </Content>
          ))}
        </ContentWrapper>
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 792px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  p {
    color: #505d6f;

    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
  }

  h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
  }

  a {
    width: 100%;
    padding: 10px 0;
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
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;
