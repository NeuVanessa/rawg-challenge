import styled from "@emotion/styled";

//Material Ui
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";

//Card Container
export const ContainerCard = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
`;
export const Loading = styled.h1`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  text-align: center;
  left: 350px;
`;

// O card em si
export const Card = styled(Grid)`
  background: blue;
`;

//Container do Card
export const SimpleBox = styled(Box)`
  position: absolute;
  margin-top: 150px;
`;

export const Image = styled(CardMedia)`
  display: flex;
  width: 46%;
  float: left;
  height: 128px;
`;

export const CardDetails = styled(Container)`
  display: column;
  width: 46%;
  float: left;
  background-color: rgb(34, 51, 67);
  height: 128px;
  color: white;
  &:hover {
    color: black;
    background: white;
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
`;

export const Title = styled(Typography)`
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
`;

export const Description = styled(Typography)`
  // display: flex;
  //   color: red;
`;
export const Search = styled.input`
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 50%;
  height: 45px;
  padding: 0 20px;
  font-size: 1.6rem;
  border: 1px solid #d0cfce;
  outline: none;
  color: #ffff;
  bottom: 35px;
  &:focus {
    border: 1px solid #ffff;
    transition: 0.35s ease;
    &::-webkit-input-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
    &::-moz-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
    &:-ms-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
  }
`;
