// shared/context/UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { Tariff } from '@shared/types';

interface User {
  name: string;
  email: string;
  purchasedTariffs?: Tariff[];
}

interface UserContextProps {
  user: User | null;
  setUser: (user: User) => void;
  addPurchasedTariff: (tariff: Tariff) => void;
  signOut: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);

  const setUser = (userData: User) => setUserState(userData);

  const addPurchasedTariff = (tariff: Tariff) => {
    if (user) {
      setUserState({
        ...user,
        purchasedTariffs: [...(user.purchasedTariffs || []), tariff],
      });
    }
  };

  const signOut = () => setUserState(null);

  return (
    <UserContext.Provider value={{ user, setUser, addPurchasedTariff, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
};
