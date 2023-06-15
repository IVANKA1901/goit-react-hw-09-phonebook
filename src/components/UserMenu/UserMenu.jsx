import { useDispatch } from 'react-redux';
import { Button, Container, Text } from './UserMenu.styled';
import { useSelector } from 'react-redux';
import { logOutThunk } from '../../redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.auth);

  // console.log(name);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <Container>
      <Text>Welcome, {name}!</Text>
      <Button type="button" onClick={onLogOut}>
        Logout
      </Button>
    </Container>
  );
};
