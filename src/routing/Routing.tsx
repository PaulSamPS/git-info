import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Main, Profile } from 'pages';

export const Routing = () => (
  <Routes>
    <Route index element={<Main />} />
    <Route path='/profile/:username' element={<Profile />} />
    <Route path='*' element={<Navigate to='/' replace />} />
  </Routes>
);
