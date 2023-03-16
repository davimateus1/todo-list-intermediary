export type CreateUser = {
  name: string;
  username: string;
  admin: string;
};

export type User = {
  id: string;
  name: string;
  username: string;
  admin: string;
  todos: unknown[];
};
