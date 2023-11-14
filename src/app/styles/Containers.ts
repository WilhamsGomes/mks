import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 22px;
  row-gap: 30px;

  @media (${(props) => props.theme.breaks.xl}) {
    width: 100%;
    padding: 0px 20px;
  }

  @media (${(props) => props.theme.breaks.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (${(props) => props.theme.breaks.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${(props) => props.theme.breaks.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ContainerNotFound = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentHeader = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  input {
    border: none;
    height: 30px;
    width: 280px;
    background: ${(props) => props.theme.colors.baseProduct2};
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
    padding-left: 20px;
    border-radius: 8px;

    &::placeholder {
      font-weight: 600;
      font-size: 12px;
      opacity: 0.5;
    }
  }

  @media (${(props) => props.theme.breaks.sm}) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const OrderBy = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    font-size: 12px;
  }

  select {
    border: none;
    width: 90px;
    background: ${(props) => props.theme.colors.baseProduct1};
    color: #fff;
    padding: 5px;
    border-radius: 8px;
  }
`;
