import type { AppConfig } from '@shared/types'
import type { MockUser } from '@shared/api/types'

export const API_URL = 'https://dummyjson.com'

export const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export const config: AppConfig = {
  apiUrl: 'https://dummyjson.com',
  supportUrl: 'https://t.me/frontInterview_bot',
  authUrl: 'https://my.asocks.com/auth',
}
export const mockUsers: MockUser[] = [
  { email: 'john@example.com', password: '123456', name: 'John Doe' },
  { email: 'alice@example.com', password: 'abcdef', name: 'Alice Smith' },
]
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
