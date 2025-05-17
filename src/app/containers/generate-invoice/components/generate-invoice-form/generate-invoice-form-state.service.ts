import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { GenerateInvoiceFormConst } from './generate-invoice-form.const';
import { regexValidator } from '@shared/validators/regex.validator';
import { Patterns } from '@shared/const/patterns';
import { InvoiceService } from '@shared/services/invoice.service';
import { Router } from '@angular/router';
import { PathsEnum } from '@shared/enums/paths.enum';

@Injectable()
export class GenerateInoviceFormStateService {
  private _form!: FormArray;
  private index!: number;

  constructor(
    private formBuilder: FormBuilder,
    private invoiceService: InvoiceService,
    private router: Router
  ) {}

  public buildForm(): void {
    this._form = this.formBuilder.array([this.invoiceItemForm()]);
  }

  public addItem(): void {
    this._form.push(this.invoiceItemForm());
  }

  public deleteItem(index: number): void {
    this._form.removeAt(index);
  }

  public get formList(): FormArray {
    return this._form as FormArray;
  }

  public itemForm(index: number = this.index): FormGroup {
    this.index = index;
    return this.formList.at(index) as FormGroup;
  }

  public get name(): FormControl<number> {
    return this.formList
      .at(this.index)
      .get(GenerateInvoiceFormConst.NAME) as FormControl<number>;
  }

  public get count(): FormControl<number> {
    return this.formList
      .at(this.index)
      .get(GenerateInvoiceFormConst.COUNT) as FormControl<number>;
  }

  public get price(): FormControl<number> {
    return this.formList
      .at(this.index)
      .get(GenerateInvoiceFormConst.PRICE) as FormControl<number>;
  }

  public submit(): void {
    this._form.markAllAsTouched();

    const validForms = this._form.controls.filter(
      (form) => form.valid
    ) as FormGroup[];

    if (!validForms?.length) return;

    this.invoiceService.$invoiceList.next(validForms.map((form) => form.value));
    this.router.navigate([`${PathsEnum.INVOICE}/${PathsEnum.PREVIEW}`]);
  }

  private invoiceItemForm(): FormGroup {
    return this.formBuilder.group({
      name: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      count: new FormControl<string>('', [
        Validators.required,
        Validators.min(1),
        Validators.max(100),
        regexValidator(Patterns.INTEGER, 'integerOnly'),
      ]),
      price: new FormControl<string>('', [
        Validators.required,
        Validators.min(1),
        Validators.max(1000000),
        regexValidator(Patterns.INTEGER, 'integerOnly'),
      ]),
    });
  }
}
