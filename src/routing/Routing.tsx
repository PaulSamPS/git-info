import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main, Profile } from 'pages';

export const Routing = () => (
  <Routes>
    <Route index element={<Main />} />
    <Route path='/profile' element={<Profile />} />
  </Routes>
);
