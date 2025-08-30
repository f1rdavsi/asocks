import type { Tariff, Statistics, ProxyLocation } from '@shared/types';

export const mockStatistics: Statistics = {
  connectionSuccess: '99.7%',
  locations: '150+',
  ipAddresses: '7M+',
  satisfiedCustomers: '100 000+'
};

export const mockTariffs: Tariff[] = [
  {
    id: '1',
    name: 'Starter',
    proxyCount: 100,
    price: 95.00,
    pricePerProxy: 0.95,
    connections: 500,
    features: ['High-speed connections', '24/7 support', 'Multiple locations']
  },
  {
    id: '2',
    name: 'Professional',
    proxyCount: 250,
    price: 225.00,
    pricePerProxy: 0.9,
    connections: 500,
    isPopular: true,
    features: ['High-speed connections', '24/7 support', 'Multiple locations', 'Priority support']
  },
  {
    id: '3',
    name: 'Business',
    proxyCount: 500,
    price: 425.00,
    pricePerProxy: 0.85,
    connections: 500,
    features: ['High-speed connections', '24/7 support', 'Multiple locations', 'Priority support', 'Custom solutions']
  },
  {
    id: '4',
    name: 'Enterprise',
    proxyCount: 1000,
    price: 800.00,
    pricePerProxy: 0.8,
    connections: 500,
    features: ['High-speed connections', '24/7 support', 'Multiple locations', 'Priority support', 'Custom solutions', 'Dedicated manager']
  },
  {
    id: '5',
    name: 'Corporate',
    proxyCount: 5000,
    price: 3750.00,
    pricePerProxy: 0.75,
    connections: 500,
    features: ['High-speed connections', '24/7 support', 'Multiple locations', 'Priority support', 'Custom solutions', 'Dedicated manager', 'Custom integrations']
  }
];

export const mockLocations: ProxyLocation[] = [
  { id: '1', country: 'United States', countryCode: 'US', city: 'New York', count: 120000 },
  { id: '2', country: 'United Kingdom', countryCode: 'GB', city: 'London', count: 95000 },
  { id: '3', country: 'Germany', countryCode: 'DE', city: 'Berlin', count: 85000 },
  { id: '4', country: 'France', countryCode: 'FR', city: 'Paris', count: 75000 },
  { id: '5', country: 'Japan', countryCode: 'JP', city: 'Tokyo', count: 65000 }
];

export const mockWhyChooseUs = [
  {
    id: '1',
    title: 'Attitude',
    description: 'We work hard to make your experience with our service as comfortable as possible'
  },
  {
    id: '2',
    title: 'High success rate of connections',
    description: '99.7% successful connections and high response rate guaranteed'
  },
  {
    id: '3',
    title: 'Custom solutions',
    description: 'We develop solutions that work for the success of your business. New features are released every week'
  },
  {
    id: '4',
    title: '24/7 support',
    description: 'Technical support specialists will conduct you in all stages and will be convinced that everything works correctly. We answer questions 24/7. Your success is our priority'
  },
  {
    id: '5',
    title: 'Constantly growing proxy pool',
    description: 'We work on the expansion of geo and add more IP addresses every day'
  },
  {
    id: '6',
    title: 'Clear IPs',
    description: 'We have our own proxy infrastructure with clean addresses that will save you from bans'
  }
];

export const mockApplications = [
  'Ad verification',
  'Price comparison',
  'Marketing research',
  'Prohibited content',
  'E-Commerce',
  'Load testing',
  'Social media',
  'Finance'
];
