import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, SignUp, SignIn } from 'Routes';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};
