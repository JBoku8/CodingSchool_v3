import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent = 1): number {
    // console.group('ExponentialStrengthPipe');
    // console.log('VALUE', value);
    // console.log('Exponent', exponent);
    // console.groupEnd();

    return value ** exponent;
  }
}
