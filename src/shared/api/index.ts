import type { ApiResponse, Tariff, Statistics, ProxyLocation } from '@shared/types';
import { mockStatistics, mockTariffs, mockLocations, mockWhyChooseUs, mockApplications } from './mock-data';

// Симуляция задержки API
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  async getStatistics(): Promise<ApiResponse<Statistics>> {
    await delay(500);
    return {
      data: mockStatistics,
      success: true
    };
  },

  async getTariffs(): Promise<ApiResponse<Tariff[]>> {
    await delay(800);
    return {
      data: mockTariffs,
      success: true
      
    };
  },

  async getLocations(): Promise<ApiResponse<ProxyLocation[]>> {
    await delay(600);
    return {
      data: mockLocations,
      success: true
    };
  },

  async getWhyChooseUs(): Promise<ApiResponse<typeof mockWhyChooseUs>> {
    await delay(400);
    return {
      data: mockWhyChooseUs,
      success: true
    };
  },

  async getApplications(): Promise<ApiResponse<string[]>> {
    await delay(300);
    return {
      data: mockApplications,
      success: true
    };
  },

  async login(email: string, password: string): Promise<ApiResponse<{ token: string }>> {
    await delay(1000);
    if (email && password) {
      return {
        data: { token: 'mock-jwt-token' },
        success: true,
        message: 'Login successful'
      };
    }
    return {
      data: { token: '' },
      success: false,
      message: 'Invalid credentials'
    };
  },

  async register(email: string, password: string): Promise<ApiResponse<{ token: string }>> {
    await delay(1200);
    if (email && password) {
      return {
        data: { token: 'mock-jwt-token' },
        success: true,
        message: 'Registration successful'
      };
    }
    return {
      data: { token: '' },
      success: false,
      message: 'Registration failed'
    };
  }
};
