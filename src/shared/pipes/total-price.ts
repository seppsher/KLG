import { Pipe, PipeTransform } from '@angular/core';
import { Inovice } from '@shared/models/invoice.model';

@Pipe({
  name: 'totalPrice',
})
export class TotalPricePipe implements PipeTransform {
  transform(value: Inovice[]): number {
    if (!value || value?.length === 0) {
      return 0;
    }

    let sum = 0;

    value.forEach((item: Inovice) => {
      sum += item.price * item.count;
    });

    return sum;
  }
}
