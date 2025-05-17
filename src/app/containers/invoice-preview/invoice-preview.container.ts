import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicePreviewTableComponent } from './components/invoice-preview-table/invoice-preview-table.component';
import { ActivatedRoute } from '@angular/router';
import { Company } from '@shared/models/company.model';
import { ArrayToListPipe } from '@shared/pipes/array-to-list.pipe';

@Component({
  selector: 'app-invoice-preview',
  imports: [CommonModule, InvoicePreviewTableComponent, ArrayToListPipe],
  templateUrl: './invoice-preview.container.html',
})
export class InvoicePreviewComponent implements OnInit {
  public companyDetails!: Company;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.companyDetails = this.route.snapshot.data['companyDetails'];
  }
}
