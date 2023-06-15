import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  font-size: 30px;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
`;

export const Text = styled.p`
  font-size: 36px;
`;

export const Button = styled.button`
  background-color: rgb(119 137 235);
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
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
  margin-top: 15px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;
