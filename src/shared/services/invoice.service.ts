import { Injectable, signal } from '@angular/core';
import { Inovice } from '@shared/models/invoice.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  public $invoiceList: BehaviorSubject<Inovice[]> = new BehaviorSubject<
    Inovice[]
  >([]);
}
