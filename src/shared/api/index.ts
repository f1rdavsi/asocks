import type { ApiResponse, Tariff, Statistics, ProxyLocation } from '@shared/types'
import { mockStatistics, mockTariffs, mockLocations, mockWhyChooseUs, mockApplications } from './mock-data'
import axios from 'axios'
import { API_URL } from '@shared/config'
import { mockUsers } from './mock-data'

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
    try {
      const username = email.includes('@') ? email.split('@')[0] : email

      const { data } = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      })

      return {
        data: { token: data.token, name: data.firstName || username },
        success: true,
        message: 'Login successful',
      }
    } catch (err: any) {
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

  async register(email: string, password: string): Promise<ApiResponse<{ name: string; token: string }>> {
    try {
      const username = email.includes('@') ? email.split('@')[0] : email

      const { data } = await axios.post(`${API_URL}/auth/login`, {
        firstName: username,
        username,
        email,
        password,
      })

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
