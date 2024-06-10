import styled from "styled-components";
import BaseModal, { ModalProps } from "./base";
import { useEffect, useState } from "react";
import {
  useCreateExplanation,
  useExplanationByUUID,
  useUpdateExplanation,
} from "../../hooks/explanation";

interface Props extends ModalProps {
  id?: string;
}

export default function ExplanationModal({ state, id }: Props) {
  const { data: explanation } = useExplanationByUUID(id ?? "");

  const { mutate: createExplanation } = useCreateExplanation();
  const { mutate: updateExplanation } = useUpdateExplanation();

  const [, toggleIsOpen] = state;

  const [title, setTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");

  useEffect(() => {
    if (id && explanation) {
      setTitle(explanation.title);
      setLink(explanation.link);
    }
  }, [explanation, id]);

  function handleCancel() {
    setTitle("");
    setLink("");
    toggleIsOpen();
  }

  function handleSubmit() {
    if (id) {
      updateExplanation({ uuid: id, title, link });
    } else {
      createExplanation({ title, link });
    }

    handleCancel();
  }

  return (
    <BaseModal state={state}>
      <Wrapper>
        <h1>풀이 {id ? "수정" : "등록"}</h1>

        <InputWrapper>
          <label htmlFor="title">풀이 제목</label>
          <div>
            <input
              placeholder="풀이 제목을 입력해주세요."
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="title">풀이 링크</label>
          <div>
            <input
              placeholder="풀이 링크를 입력해주세요."
              id="title"
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
        </InputWrapper>

        <ButtonWrapper>
          <Button
            style={{
              background: "#F0F2F4",
              border: "1px solid #E7EAEE",
              color: "#1F242B",
            }}
            onClick={handleCancel}
          >
            취소
          </Button>
          <Button onClick={handleSubmit}>{id ? "완료" : "등록"}</Button>
        </ButtonWrapper>
      </Wrapper>
    </BaseModal>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    color: #1f242b;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    color: #505d6f;
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
  }

  div {
    display: flex;
    padding: 16px 20px;
    align-items: center;
    gap: 20px;
    align-self: stretch;
    border-radius: 8px;
    background: #f0f2f4;

    input {
      color: #505d6f;
      font-size: 17px;
      font-weight: 500;
      line-height: 24px;
      flex: 1;
      background-color: transparent;

      &::placeholder {
        color: #95a1b2;
      }
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;

  justify-content: flex-end;
`;

const Button = styled.button`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  border-radius: 4px;
  background: #1f242b;

  color: #fff;

  font-size: 17px;
  font-weight: 500;
  line-height: 24px; /* 141.176% */
`;
