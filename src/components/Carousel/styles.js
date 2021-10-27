
import styled from "@emotion/styled";
import Container from "@mui/material/Container";

export const SimpleContainer = styled(Container)`
max-width: 600px;
margin: 20px auto;
padding: 0 20px
`;

export const ScreenshotsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding-left: 0;
  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const ScreenshotsList = styled.li`
  width: 100%;
  margin-right: 15px;
  // position: absolute;
  &:hover {
    color: black;
    transition: 0.5s ease-out;
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 15px 20px 30px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    -moz-box-shadow: rgba(0, 0, 0, 0.8) 15px 20px 30px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    -o-box-shadow: rgba(0, 0, 0, 0.8) 15px 20px 30px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    box-shadow: rgba(0, 0, 0, 0.8) 15px 20px 30px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
  }
  @media screen and (max-width: 550px) {
    width: 80%;
    flex-direction: column;
    margin-bottom: 15px;
  }
`;

export const Screenshots = styled.img`
  width: 100%;
  height: 100%;
`;
