import { createContext, ReactNode, useState } from 'react';

import { User } from '@/modules/user/types';

type UserContextType = { user: Partial<User>; setUser: (user: Partial<User>) => void };

type UserProviderType = {
  children: ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: UserProviderType): JSX.Element => {
  const [user, setUser] = useState<Partial<User>>({});

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
