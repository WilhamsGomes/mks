import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 101px;
  background: ${(props) => props.theme.colors.baseProduct1};
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (${(props) => props.theme.breaks.sm}) {
    padding: 0 20px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.baseProduct2};
  height: 100%;

  h2 {
    color: #fff;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
  }

  p {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 19px;
  }

  @media (${(props) => props.theme.breaks.sm}) {
    h2 {
      font-size: 30px;
    }

    p {
      font-size: 15px;
    }
  }
`;

export const Cart = styled.div`
  width: 90px;
  height: 45px;
  background: ${(props) => props.theme.colors.baseProduct2};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  cursor: pointer;

  h3 {
    color: ${(props) => props.theme.colors.baseProduct3};
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
