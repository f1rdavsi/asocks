import type { ApiResponse, Tariff, Statistics, ProxyLocation } from '@shared/types'
import { mockStatistics, mockTariffs, mockLocations, mockWhyChooseUs, mockApplications } from './mock-data'
import axios from 'axios'

// 🔹 Моки пользователей (локальные)
export interface MockUser {
  email: string
  password: string
  name: string
}

export const mockUsers: MockUser[] = [
  { email: 'john@example.com', password: '123456', name: 'John Doe' },
  { email: 'alice@example.com', password: 'abcdef', name: 'Alice Smith' },
]

// 🔹 Симуляция задержки API
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

  // 🔹 Логин через DummyJSON с fallback на моки
  async login(email: string, password: string): Promise<ApiResponse<{ name: string; token: string }>> {
    try {
      // Если это email → берём часть до @
      const username = email.includes('@') ? email.split('@')[0] : email

      const { data } = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      })

      return {
        data: { token: data.token, name: data.firstName || username },
        success: true,
        message: 'Login successful',
      }
    } catch (err: any) {
      // fallback: локальные моки
      const user = mockUsers.find(u => u.email === email && u.password === password)
      if (user) {
        return {
          data: { token: 'mock-jwt-token', name: user.name },
          success: true,
          message: 'Login successful (mock)',
        }
      }

      return {
        data: { token: '', name: '' },
        success: false,
        message: err.response?.data?.message || 'Invalid credentials',
      }
    }
  },

  // 🔹 Регистрация: DummyJSON + сохранение в моки
  async register(email: string, password: string): Promise<ApiResponse<{ name: string; token: string }>> {
    try {
      const username = email.includes('@') ? email.split('@')[0] : email

      const { data } = await axios.post('https://dummyjson.com/users/add', {
        firstName: username,
        username,
        email,
        password,
      })

      // добавляем в локальные моки
      mockUsers.push({ email, password, name: data.firstName })

      return {
        data: { token: 'mock-jwt-token', name: data.firstName },
        success: true,
        message: 'Registration successful',
      }
    } catch (err: any) {
      return {
        data: { token: '', name: '' },
        success: false,
        message: err.response?.data?.message || 'Registration failed',
      }
    }
  },
}
