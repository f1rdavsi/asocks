import { AppRouter } from '@app/router'
import './App.scss'
import '@shared/i18n'
import { FC } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const App: FC = () => (
  <>
    <AppRouter />
    <ToastContainer  position="top-right" autoClose={3000} />
  </>
)
