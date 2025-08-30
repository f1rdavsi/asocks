import type { AppConfig } from '@shared/types';

export const config: AppConfig = {
  apiUrl: 'https://api.asocks.com',
  supportUrl: 'https://t.me/AsocksComBot',
  authUrl: 'https://my.asocks.com/auth'
};

export const ROUTES = {
  HOME: '/',
  PRICING: '/pricing',
  GEO: '/geo',
  PARTNERS: '/partners',
  COMPARE: '/compare',
  LOGIN: '/login',
  REGISTER: '/register'
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'Prices', href: ROUTES.PRICING },
  { label: 'GEO', href: ROUTES.GEO },
  { label: 'Partners', href: ROUTES.PARTNERS },
  { label: 'Compare', href: ROUTES.COMPARE }
] as const;
