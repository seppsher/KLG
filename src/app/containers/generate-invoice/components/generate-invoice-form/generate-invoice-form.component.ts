import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GenerateInoviceFormStateService } from './generate-invoice-form-state.service';
import { InputFieldComponent } from '@shared/components/input-field/input-field.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-generate-invoice-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputFieldComponent,
    MatButtonModule,
  ],
  templateUrl: './generate-invoice-form.component.html',
})
export class GenerateInvoiceFormComponent implements OnInit {
  constructor(
    public generateInoviceFormStateService: GenerateInoviceFormStateService
  ) {}

  public ngOnInit(): void {
    this.generateInoviceFormStateService.buildForm();
  }

  public addItem(): void {
    this.generateInoviceFormStateService.addItem();
  }
}
