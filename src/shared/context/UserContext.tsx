// shared/context/UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react'
import type { Tariff } from '@shared/types'
import type { User } from './types'
import type { UserContextProps } from './types'
const UserContext = createContext<UserContextProps | undefined>(undefined)

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user')
    return storedUser ? JSON.parse(storedUser) : null
  })

  const setUser = (userData: User) => {
    setUserState(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const addPurchasedTariff = (tariff: Tariff) => {
    if (user) {
      const updatedUser = { ...user, purchasedTariffs: [...(user.purchasedTariffs || []), tariff] }
      setUserState(updatedUser)
      localStorage.setItem('user', JSON.stringify(updatedUser))
    }
  }

  const signOut = () => {
    setUserState(null)
    localStorage.removeItem('user')
  }

  return <UserContext.Provider value={{ user, setUser, addPurchasedTariff, signOut }}>{children}</UserContext.Provider>
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUser must be used within UserProvider')
  return context
}
