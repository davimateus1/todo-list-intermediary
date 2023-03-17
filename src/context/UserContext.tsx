import { createContext, ReactNode, useEffect, useState } from 'react';

import { User } from '@/modules/user/types';

type UserContextType = { user: Partial<User>; setUser: (user: Partial<User>) => void };

type UserProviderType = {
  children: ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: UserProviderType): JSX.Element => {
  const [user, setUser] = useState<Partial<User>>({});

  useEffect(() => {
    const storageUser = localStorage.getItem('@user');
    setUser(JSON.parse(storageUser ?? ''));
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
