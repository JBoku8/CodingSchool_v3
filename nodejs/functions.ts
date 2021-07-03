import { User } from './interfaces';

function myFunction(): string {
  console.log('Something');
  return '';
}

const saySomething = (): number => {
  console.log('Hello Something');
  return 0;
};

const printer = (s: string): void => console.log(s);

const add = (a: number, b: number = 0): number => {
  return a + b;
};

export const printUser = (u: User): void => {
  console.group('PRINT_USER');
  console.log('EMAIL', u.email);
  console.log('password', u.password);
  console.log('username', u.username);
  console.log('age', u.age);
  console.log('isAuthorized', u.isAuthorized);
  console.log('notRequired', u.notRequired);
  console.groupEnd();
};

printer(add(2).toString());

myFunction();
saySomething();
