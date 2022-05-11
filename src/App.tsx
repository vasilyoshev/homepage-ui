import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Signup, Login } from 'Routes';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
