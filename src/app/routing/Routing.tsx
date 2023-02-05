import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Main = lazy(() => import('pages/Main'));
const Profile = lazy(() => import('pages/Profile'));

export const Routing = () => (
  <Routes>
    <Route index element={<Main />} />
    <Route path='/profile/:username' element={<Profile />} />
    <Route path='*' element={<Navigate to='/' replace />} />
  </Routes>
);
