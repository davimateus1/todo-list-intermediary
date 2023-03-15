import { Text } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

export const TodosRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/todos' element={<Text>kkkkk</Text>} />
    </Routes>
  );
};
