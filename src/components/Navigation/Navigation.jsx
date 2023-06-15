import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Book, ContainerNav, NavDiv, NavHome } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  const navigate = useNavigate();
  //   console.log(isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
    <ContainerNav>
      <Book>Phonebook 📙</Book>
      <NavHome>
        <NavLink to="/">Home</NavLink>
      </NavHome>

      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <NavDiv>
          <NavLink to="/register">Registration</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </NavDiv>
      )}
    </ContainerNav>
  );
};
