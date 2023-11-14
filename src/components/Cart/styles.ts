import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100dvh;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 99;
`;

export const Container = styled.div`
  width: 486px;
  height: 100dvh;
  background: ${(props) => props.theme.colors.baseProduct1};
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between; 

  @media (${props => props.theme.breaks.sm}){
    width: 90%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  overflow: auto;
  padding: 40px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.baseProduct2};
  /* padding: 40px; */
  width: 100%;

  button {
    width: 32px;
    height: 32px;
    border: none;
    background: ${(props) => props.theme.colors.baseProduct6};
    color: ${(props) => props.theme.colors.baseProduct2};
    font-size: 10px;
    border-radius: 50%;
  }
`;

export const ButtonFinishBuy = styled.button`
  width: 100%;
  height: 97px;
  border: none;
  background: ${(props) => props.theme.colors.baseProduct6};
  color: ${(props) => props.theme.colors.baseProduct2};
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
`;

export const ValueTotal = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  color: ${props => props.theme.colors.baseProduct2};
`;
