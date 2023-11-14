import styled from "styled-components";

export const Container = styled.div<{$isLoading?: boolean}>`
  min-width: 218px;
  height: 285px;
  background: ${(props) => props.theme.colors.baseProduct2};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.$isLoading ? "center" : "space-between"};
  padding-top: 18px;

  span {
    min-height: 50px;
    width: 100%;
    color: ${(props) => props.theme.colors.baseProduct4};
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: 12px;
    padding: 0px 16px;
    text-align: justify;
  }

  @media (${props => props.theme.breaks.md}) {
    width: 100%;
    min-width: 0;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;

  p {
    width: 124px;
    color: ${(props) => props.theme.colors.baseProduct4};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
  }
`;

export const Price = styled.div`
  background: ${(props) => props.theme.colors.baseProduct3};
  color: ${(props) => props.theme.colors.baseProduct2};
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px; 
  height: 26px;
  padding: 8px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonBuy = styled.button`
  width: 100%;
  height: 32px;
  background: ${(props) => props.theme.colors.baseProduct1};
  color: ${(props) => props.theme.colors.baseProduct2};
  border: none;
  border-radius: 0px 0px 8px 8px;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;
