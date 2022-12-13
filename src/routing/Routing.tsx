import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Main = lazy(() => import('pages/Main'));
const Search = lazy(() => import('pages/Search'));
const Profile = lazy(() => import('pages/Profile'));

export const Routing = () => (
  <Routes>
    <Route index element={<Main />} />
    <Route path='/search' element={<Search />} />
    <Route path='/profile/:username' element={<Profile />} />
    {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
  </Routes>
);
