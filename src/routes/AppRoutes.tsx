import { BrowserRouter } from 'react-router-dom';

import { TodosRoutes } from '@/modules/todos';
import { UserRoutes } from '@/modules/user';

export const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <TodosRoutes />
      <UserRoutes />
    </BrowserRouter>
  );
};
