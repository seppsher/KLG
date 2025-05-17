import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Destroyable } from '@shared/directives/destroyable';
import { Inovice } from '@shared/models/invoice.model';
import { InovicePreviewService } from '../../services/invoice-preview.service';
import { InvoiceService } from '@shared/services/invoice.service';
import { TotalPricePipe } from '@shared/pipes/total-price';

@Component({
  selector: 'app-invoice-preview-table',
  imports: [CommonModule, TotalPricePipe],
  templateUrl: './invoice-preview-table.component.html',
  styleUrl: './invoice-preview-table.component.scss',
  providers: [InovicePreviewService],
})
export class InvoicePreviewTableComponent extends Destroyable {
  public invoiceList: Inovice[] = [];

  constructor(public invoiceService: InvoiceService) {
    super();
  }

  public override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.invoiceService.$invoiceList.next([]);
  }
}
