import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Routes/Home/Home';
import { SignIn } from './Routes/SignIn/SignIn';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<SignIn />} />
    </Routes>
  );
};
