import { Route, Routes } from 'react-router-dom';

import { AllUsersPage, NewUserPage } from '../pages';

import { useUser } from '@/hooks';

export const UserRoutes = (): JSX.Element => {
  const { user } = useUser();
  return (
    <Routes>
      <Route index path='/' element={<NewUserPage />} />
      {user.admin && <Route path='/users' element={<AllUsersPage />} />}
    </Routes>
  );
};
