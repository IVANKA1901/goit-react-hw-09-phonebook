import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import { Navigation } from './Navigation/Navigation';
import { FormContact } from './FormContact/FormContact';
import { FullPage, Title } from './App.styled';
import { refreshUserThunk } from '../redux/auth/operations';

export function App() {
  const { isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <FullPage>
      <Navigation />
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <FormContact />
            ) : (
              <Title>Please sign up or log in</Title>
            )
          }
        />
      </Routes>
    </FullPage>
  );
}
