// import styled from '@emotion/styled';
import styled from 'styled-components';

export const Container = styled.div``;

export const FormTitle = styled.p`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 50px;
`;

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  /* /* max-width: 500px; */
  width: 400px;
  margin: auto;
  margin-top: 100px;
  padding: 100px;
  background-color: aliceblue;
  border-radius: 8px;
`;

export const Input = styled.input`
  background: #fff;
  color: #898382;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  padding: 22px 18px;
  font-size: 20px;
  width: 100%;
  height: 35px;
  margin-bottom: 10px;
  &:last-of-type {
    margin-bottom: 25px;
  }
`;
export const NameInput = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Btn = styled.button`
  align-self: center;
  background-color: rgb(119 137 235);

  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: 10px 30px;
  text-decoration: none;
  transition: all 100ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;
