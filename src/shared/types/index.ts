export interface User {
  id: string;
  email: string;
  name?: string;
  isAuthenticated: boolean;
}

export interface Tariff {
  id: string;
  name: string;
  proxyCount: number;
  price: number;
  pricePerProxy: number;
  connections: number;
  isPopular?: boolean;
  features: string[];
}

export interface ProxyLocation {
  id: string;
  country: string;
  countryCode: string;
  city: string;
  count: number;
}

export interface Statistics {
  connectionSuccess: string;
  locations: string;
  ipAddresses: string;
  satisfiedCustomers: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export type Language = 'en' | 'ru';

export interface AppConfig {
  apiUrl: string;
  supportUrl: string;
  authUrl: string;
}
