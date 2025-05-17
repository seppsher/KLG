import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToList',
})
export class ArrayToListPipe implements PipeTransform {
  transform(value: string[]): string {
    if (!value || value?.length === 0) {
      return '';
    }

    return value.join(', ');
  }
}
