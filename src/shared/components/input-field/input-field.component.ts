import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IntegerOnlyDirective } from '@shared/directives/integer-only';

@Component({
  selector: 'app-ipnut-field',
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    IntegerOnlyDirective,
  ],
  templateUrl: './input-field.component.html',
})
export class InputFieldComponent implements OnInit {
  @Input() public control!: FormControl;
  @Input() public label!: string;
  @Input() public placeholder!: string;
  @Input() public type: string = 'text';
  @Input() public onlyInteger!: boolean;

  constructor() {}

  public ngOnInit(): void {}
}
