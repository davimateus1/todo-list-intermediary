import { Text } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import { NewUserPage } from '../pages';

export const UserRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route index path='/' element={<NewUserPage />} />
      <Route path='/users' element={<Text>kkkkk</Text>} />
    </Routes>
  );
};
