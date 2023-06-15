import styled from 'styled-components';

export const Label = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  color: var(--secondaryTextColor);
  font-weight: 500;
  font-size: 18px;
`;

export const Input = styled.input`
  display: block;
  margin-top: 10px;
  padding: 10px;
  border: 4px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  border-color: black;
  transition: border-color 250ms ease-in-out;
  &:focus {
    outline: none;
    border-color: var(--accentColor);
    box-shadow: 0px 0px 4px rgba(79, 179, 255, 0.3);
  }
`;
export const NameInput = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`;
