import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Company } from '@shared/models/company.model';

@Injectable()
export class InovicePreviewService {
  constructor() {}

  public getCompanyDetails(): Observable<Company> {
    return of({
      name: 'KLG test task',
      address: 'Poland',
      phones: ['123 456 789', '789-456-123'],
    });
  }
}
