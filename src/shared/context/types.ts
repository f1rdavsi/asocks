import { Tariff } from "@shared/types"

export interface User {
  name: string
  email: string
  purchasedTariffs?: Tariff[]
}

 export interface UserContextProps {
  user: User | null
  setUser: (user: User) => void
  addPurchasedTariff: (tariff: Tariff) => void
  signOut: () => void
}