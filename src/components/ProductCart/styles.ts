import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 95px;
  border-radius: 8px;
  background: #fff;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  position: relative;

  p {
    min-width: 113px;
  }

  @media (${(props) => props.theme.breaks.sm}) {
    flex-direction: column;
    height: 220px;
    gap: 10px;
    padding: 0px;

    img {
      width: 80px;
      height: 80px;
    }

    p {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const WrapperActions = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;

  h6 {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (${(props) => props.theme.breaks.sm}) {
    width: 50%;
    h6 {
      display: none;
    }
  }
`;

export const Quantity = styled.div`
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  border: 0.3px solid #bfbfbf;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #bfbfbf;
    border-right: 1px solid #bfbfbf;
  }

  button {
    background: none;
    border: none;
  }

  span,
  button {
    font-weight: bold;
    width: calc(100% / 3);
  }

  @media (${(props) => props.theme.breaks.sm}) {
    width: 100%;
    height: 35px;
  }
`;

export const ButtonRemove = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  background: ${(props) => props.theme.colors.baseProduct6};
  color: ${(props) => props.theme.colors.baseProduct2};
  font-size: 10px;
  border-radius: 50%;
  position: absolute;
  right: -1%;
  top: -5%;
`;

export const BoxQuantity = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 20px;
  width: 100%;

  @media (${(props) => props.theme.breaks.sm}) {
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;

    h3 {
      background: #000;
      color: #fff;
      padding: 8px;
      border-radius: 8px;
    }
  }
`;
