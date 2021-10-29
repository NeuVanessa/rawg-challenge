import styled from "@emotion/styled";

export const Container = styled.div`

background:red;
`;

export const Wrapper = styled.span`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 80px;

  // @media (max-width: 360px) {
  //   display: grid;
  //   justify-content: center;
  //   grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  //   grid-gap: 80px;
  // }
  // @media (max-width: 1000px) {
  //   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  // }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
