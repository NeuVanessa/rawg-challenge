import styled from "@emotion/styled";
export const SimpleContainer = styled.span`
  width: 100%;
  cursor: pointer;
  position: fixed;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  background-color: rgb(34, 51, 67);
  font-family: "ubuntu", sans-serif;
  font-size: 4vw;
  padding-bottom: 15px;
  box-shadow: 0px 1px 5px black;
  color: white;
  z-index: 100;
  @media (max-width: 1000px) {
    padding-top: 15px;
    font-size: 6.4vw;
  }
`;
