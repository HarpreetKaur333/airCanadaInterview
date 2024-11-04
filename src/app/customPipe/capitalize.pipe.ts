import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  transform(value: string): string {
    if (!value) return '';

    return value
    .split(' ')  // Split the string by spaces
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())  // Capitalize first letter of each word
    .join(' ');  // Join the words back together
    // case:1 return value.toUpperCase();
    //case 2: value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    //omnly first Letter cpatial
  }
  // }

}
