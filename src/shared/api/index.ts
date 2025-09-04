import type { ApiResponse, Tariff, Statistics, ProxyLocation } from '@shared/types'
import { mockStatistics, mockTariffs, mockLocations, mockWhyChooseUs, mockApplications } from './mock-data'

// Моки пользователей
export interface MockUser {
  email: string
  password: string
  name: string
}

export const mockUsers: MockUser[] = [
  { email: 'john@example.com', password: '123456', name: 'John Doe' },
  { email: 'alice@example.com', password: 'abcdef', name: 'Alice Smith' },
]

// Симуляция задержки API
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const api = {
  async getStatistics(): Promise<ApiResponse<Statistics>> {
    await delay(500)
    return { data: mockStatistics, success: true }
  },

  async getTariffs(): Promise<ApiResponse<Tariff[]>> {
    await delay(800)
    return { data: mockTariffs, success: true }
  },

  async getLocations(): Promise<ApiResponse<ProxyLocation[]>> {
    await delay(600)
    return { data: mockLocations, success: true }
  },

  async getWhyChooseUs(): Promise<ApiResponse<typeof mockWhyChooseUs>> {
    await delay(400)
    return { data: mockWhyChooseUs, success: true }
  },

  async getApplications(): Promise<ApiResponse<{ id: string; img: string; text: string }[]>> {
    await delay(300)
    return { data: mockApplications, success: true }
  },

  async login(email: string, password: string): Promise<ApiResponse<{ name: string; token: string }>> {
    await delay(1000)
    const user = mockUsers.find(u => u.email === email && u.password === password)
    if (user) {
      return {
        data: { token: 'mock-jwt-token', name: user.name },
        success: true,
        message: 'Login successful',
      }
    }
    return {
      data: { token: '', name: '' },
      success: false,
      message: 'Invalid credentials',
    }
  },

  async register(email: string, password: string): Promise<ApiResponse<{ name: string; token: string }>> {
    await delay(1200)
    const exists = mockUsers.find(u => u.email === email)
    if (exists) {
      return {
        data: { token: '', name: '' },
        success: false,
        message: 'User already exists',
      }
    }
    const name = email.split('@')[0] // простой мок имени
    mockUsers.push({ email, password, name })
    return {
      data: { token: 'mock-jwt-token', name },
      success: true,
      message: 'Registration successful',
    }
  },
}
