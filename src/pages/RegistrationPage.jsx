import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Btn,
  FormStyles,
  FormTitle,
  Input,
  NameInput,
} from './RegistrationPage.styled';
import { registerThunk } from '../redux/auth/operations';

const RegistrationPage = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setUserName(value);
        break;
      case 'email':
        setUserEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerThunk({ userName, userEmail, password }));
    setUserName('');
    setUserEmail('');
    setPassword('');
  };

  return (
    <FormStyles onSubmit={handleSubmit}>
      <FormTitle>Registration form </FormTitle>
      <label>
        <NameInput>Name</NameInput>
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          value={userName}
          placeholder="👤 Please enter your name"
        />
      </label>
      <label>
        <NameInput>Email</NameInput>
        <Input
          onChange={handleChange}
          type="email"
          name="email"
          value={userEmail}
          placeholder="📧 name@example.com"
        />
      </label>
      <label>
        <NameInput>Password</NameInput>
        <Input
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          placeholder="🔒 Please create a password"
        />
      </label>
      <Btn type="submit">Registration</Btn>
    </FormStyles>
  );
};

export default RegistrationPage;
