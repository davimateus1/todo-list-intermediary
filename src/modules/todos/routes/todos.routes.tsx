import { Route, Routes } from 'react-router-dom';

import { TodosPage } from '../pages';

export const TodosRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path=':userId/todos' element={<TodosPage />} />
    </Routes>
  );
};
