import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateInvoiceFormComponent } from './components/generate-invoice-form/generate-invoice-form.component';
import { GenerateInoviceFormStateService } from './components/generate-invoice-form/generate-invoice-form-state.service';

@Component({
  selector: 'app-generate-invoice',
  imports: [CommonModule, GenerateInvoiceFormComponent],
  providers: [GenerateInoviceFormStateService],
  templateUrl: './generate-invoice.container.html',
})
export class GenerateInvoiceComponent {
  constructor() {}
}
