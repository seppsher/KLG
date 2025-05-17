import { Routes } from '@angular/router';
import { GenerateInvoiceComponent } from './containers/generate-invoice/generate-invoice.container';
import { InvoicePreviewComponent } from './containers/invoice-preview/invoice-preview.container';
import { PathsEnum } from '@shared/enums/paths.enum';
import { CompanyResolver } from './containers/invoice-preview/invoice-preview.resolver';
import { InovicePreviewService } from './containers/invoice-preview/services/invoice-preview.service';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `${PathsEnum.INVOICE}/${PathsEnum.GENERATE}`,
  },
  {
    path: `${PathsEnum.INVOICE}/${PathsEnum.PREVIEW}`,
    resolve: {
      companyDetails: CompanyResolver,
    },
    providers: [CompanyResolver, InovicePreviewService],
    component: InvoicePreviewComponent,
  },
  {
    path: `${PathsEnum.INVOICE}/${PathsEnum.GENERATE}`,
    component: GenerateInvoiceComponent,
  },
];
