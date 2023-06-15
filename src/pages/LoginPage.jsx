import { useDispatch } from 'react-redux';

import { Btn, FormStyles, Input } from './LoginPage.styled';
import { NameInput } from './RegistrationPage.styled';
import { logInThunk } from '../redux/auth/operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logInThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyles onSubmit={handleSubmit}>
      <label>
        <NameInput>Email</NameInput>
        <Input type="email" name="email" placeholder="📧 name@example.com" />
      </label>
      <label>
        <NameInput>Password</NameInput>
        <Input
          type="password"
          name="password"
          placeholder="🔒 Please create a password"
        />
      </label>
      <Btn type="submit">Login</Btn>
    </FormStyles>
  );
};

export default LoginPage;
