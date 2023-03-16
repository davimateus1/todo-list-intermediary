import { useContext } from 'react';

import { UserContext } from '@/context';
import { User } from '@/modules/user/types';

export const useUser = (): {
  user: Partial<User>;
  setUser: (user: Partial<User>) => void;
} => useContext(UserContext);
