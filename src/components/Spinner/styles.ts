import styled from "styled-components";

export const Spinner = styled.div`
  border: 8px solid gray;
  border-top: 8px ${(props) => props.theme.colors.baseProduct1} solid;
  border-radius: 50%;
  height: 90px;
  width: 90px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
