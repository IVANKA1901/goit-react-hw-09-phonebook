import styled from 'styled-components';

export const FullPage = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  height: 1000px;
  justify-content: center;
  background-color: #3eecac;
  background-image: linear-gradient(19deg, #3eecac 10%, #ee74e1 83%);

  text-shadow: 2px 2px 4px rgb(46 43 43 / 80%);
`;

export const Title = styled.p`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 50px;
  margin-top: 50px;
`;
