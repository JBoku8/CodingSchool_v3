import { printUser } from './functions';

export interface User {
  email: string;
  password: string;
  username: string;
  age: number;
  isAuthorized: boolean;
  notRequired?: string;
}

const me: User = {
  email: 'jonhdoe@example.com',
  password: 'johnpassword',
  username: 'john123',
  age: 14,
  isAuthorized: false,
  notRequired: 'not required',
};

const james: User = {
  email: 'jamesbond@agent.com',
  password: 'agent007',
  username: 'james007',
  age: 40,
  isAuthorized: true,
};

printUser(me);
printUser(james);
