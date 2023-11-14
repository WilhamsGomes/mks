import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 34px;
  background: ${(props) => props.theme.colors.baseProduct5};
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${(props) => props.theme.colors.baseProduct3};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
