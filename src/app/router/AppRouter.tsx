import type React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@pages/home';
import { ROUTES } from '@shared/config';
// import { notFound } from 'next/navigation'; 
import { NotFoundPage } from '@pages/NotFoundPage/NotFoundPage';


export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        {/* TODO: Другие роуты надо добавить  позже */}
        
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
