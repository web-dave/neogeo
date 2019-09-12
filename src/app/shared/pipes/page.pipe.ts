import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'page'
})
export class PagePipe implements PipeTransform {
  transform(value: number, prefix = 'S.'): string {
    console.log('Pipe', prefix + ': ' + value);
    return prefix + ': ' + value;
  }
}
