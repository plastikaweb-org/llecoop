import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any) {
    if (typeof value !== 'string') {
      throw new Error('Requires a String as input');
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
