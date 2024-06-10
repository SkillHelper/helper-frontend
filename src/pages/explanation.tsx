import styled from "styled-components";
import DashboardLayout from "../components/layout/DashboardLayout";
import MaterialIcon from "../components/atoms/MaterialIcon";
import { useReducer, useState } from "react";
import ExplanationModal from "../components/modals/ExplanationModal";
import { useDeleteExplanation, useExplanation } from "../hooks/explanation";

export default function Explanation() {
  const { data: explanation } = useExplanation();
  const { mutate: deleteExplanation } = useDeleteExplanation();

  const [id, setId] = useState<string | undefined>(undefined);
  const [isOpen, toggleIsOpen] = useReducer((state) => {
    if (state) setId(undefined);
    return !state;
  }, false);

  return (
    <>
      <DashboardLayout>
        <Wrapper>
          <TitleContent>
            <Title>풀이 모음</Title>

            <Description>
              지난 대회에서 작성된 풀이를 확인할 수 있습니다.
            </Description>
          </TitleContent>

          <ContentWrapper>
            {explanation?.map((value, index) => (
              <Content key={index}>
                <div>
                  <p>{value.createdAt.split("T")[0]}</p>
                  <h1>{value.title}</h1>
                </div>

                <ButtonGroup>
                  <a target="_blank" href={value.link}>
                    <MaterialIcon width={22}>launch</MaterialIcon>
                    바로가기
                  </a>

                  <button
                    onClick={() => {
                      toggleIsOpen();
                      setId(value.uuid);
                    }}
                  >
                    <MaterialIcon width={22}>edit</MaterialIcon>
                  </button>

                  <button
                    onClick={() => {
                      deleteExplanation(value.uuid);
                    }}
                  >
                    <MaterialIcon width={22}>delete</MaterialIcon>
                  </button>
                </ButtonGroup>
              </Content>
            ))}

            <Content
              onClick={() => {
                toggleIsOpen();
              }}
              style={{
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <MaterialIcon width={30}>add</MaterialIcon>
            </Content>
          </ContentWrapper>
        </Wrapper>
      </DashboardLayout>

      <ExplanationModal state={[isOpen, toggleIsOpen]} id={id} />
    </>
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
  gap: 18px;

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
    flex: 1;
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

  button {
    width: min-content;
    padding: 10px;
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

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row !important;
  gap: 10px;
`;
