import styled from "styled-components";
import DashboardLayout from "../components/layout/DashboardLayout";
import { useUsers } from "../hooks/user";

export default function Help() {
  const { data: users } = useUsers();

  return (
    <DashboardLayout>
      <Wrapper>
        <TitleContent>
          <Title>HELP</Title>

          <Description>
            기능반 선배들의 연락처를 확인할 수 있습니다.
          </Description>
        </TitleContent>

        <ContentWrapper>
          {users?.map((user) => (
            <Content
              target="_blank"
              href={`https://discordapp.com/users/${user.clientId}`}
            >
              <img src={user?.profileImage} alt="profile image" />

              <div>
                <h1>{user.displayName}</h1>
                <p>{user.username}</p>
              </div>
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
  grid-template-columns: repeat(5, 1fr);
  gap: 18px;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 792px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Content = styled.a`
  width: 100%;
  padding: 14px;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;

  display: flex;
  gap: 14px;

  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 50%;

    border: 1px solid #dbdbdb;
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
    padding: 4px 0;

    p {
      color: #505d6f;

      font-size: 14px;
      font-weight: 500;
    }

    h1 {
      font-size: 18px;
      font-weight: 700;
    }
  }
`;
