import type { AppConfig } from '@shared/types'

export const config: AppConfig = {
  apiUrl: 'https://dummyjson.com',
  supportUrl: 'https://t.me/frontInterview_bot',
  authUrl: 'https://my.asocks.com/auth',
}

export const ROUTES = {
  HOME: '/',
  PRICING: '/#pricing',
  GEO: '/geo',
  PARTNERS: '/partners',
  COMPARE: '/compare',
  LOGIN: '/login',
  REGISTER: '/register',
} as const

export const NAVIGATION_ITEMS = [
  { label: 'nav.prices', href: ROUTES.PRICING },
  { label: 'nav.geo', href: ROUTES.GEO },
  { label: 'nav.partners', href: ROUTES.PARTNERS },
  { label: 'nav.compare', href: ROUTES.COMPARE },
] as const

