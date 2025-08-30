import type React from 'react';
import { AppRouter } from '@app/router';
import './App.scss';
import  '@shared/i18n'


export const App: React.FC = () => {
  return <AppRouter />;
};
