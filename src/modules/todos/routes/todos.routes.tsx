import { Route, Routes } from 'react-router-dom';

import { TodosPage } from '../pages';

export const TodosRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/todos' element={<TodosPage />} />
    </Routes>
  );
};
