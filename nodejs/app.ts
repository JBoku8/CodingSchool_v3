let text: string = 'Typescript';
let checked: boolean = false;
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ['One', 'Two', 'Three'];

const User = {
  name: 'Name',
  age: 0,
};

numbers.push(1);
numbers.push(100);
names.push('Four');

let sum: number = addTen(getTen());
let random: string = randomString();
printText(random);

const result: string | undefined = mixedReturn(11);
if (result) {
  console.log('IF', result);
} else {
  console.log('ELSE', result);
}

function printText(text: string | number): void {
  console.log(text);
}

function getTen(): number {
  return 10;
}

function addTen(a: number): number {
  return a + 10;
}

function randomString(): string {
  return 'String message';
}

function mixedReturn(n: number): string | undefined {
  if (n > 10) return 'Cool ✅';
  return;
}
