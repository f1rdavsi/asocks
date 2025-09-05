import type React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '@pages/home'
import { ROUTES } from '@shared/config'
import { NotFoundPage } from '@pages/NotFoundPage/NotFoundPage'
import { PartnersPage } from '@pages/partners/PartnersPage'
import { UserProvider } from '@shared/context/UserContext'
import { LoginPage } from '@pages/auth/LoginPage'
import { GeoPage } from '@pages/geo/GeoPage'
export const AppRouter: React.FC = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.PARTNERS} element={<PartnersPage />} />
          <Route path={ROUTES.GEO} element={<GeoPage />} />
          {/* TODO: Другие роуты добавить позже */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}
