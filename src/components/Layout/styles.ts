import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 116px;

  @media (${(props) => props.theme.breaks.sm}) {
    gap: 14px;
  }
`;

export const Content = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
