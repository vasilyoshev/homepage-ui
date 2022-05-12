import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Routes/Home/Home';
import { SignUp } from './Routes/SignUp/SignUp';
import { SignIn } from './Routes/SignIn/SignIn';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
    </Routes>
  );
};
