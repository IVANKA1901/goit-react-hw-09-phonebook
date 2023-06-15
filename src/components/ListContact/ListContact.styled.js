import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  color: var(--secondaryTextColor);
  font-weight: 500;
  font-size: 18px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Btn = styled.button`
  align-self: center;
  margin-top: 10px;
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

  padding: 10px 10px;
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

export const Contact = styled.p`
  margin-right: 25px;
  font-size: 24px;
`;
