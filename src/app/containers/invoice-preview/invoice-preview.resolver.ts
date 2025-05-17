import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Company } from '@shared/models/company.model';
import { InovicePreviewService } from './services/invoice-preview.service';
import { Observable } from 'rxjs';

@Injectable()
export class CompanyResolver implements Resolve<Company> {
  constructor(private inovicePreviewService: InovicePreviewService) {}

  resolve(): Observable<Company> {
    return this.inovicePreviewService.getCompanyDetails();
  }
}
