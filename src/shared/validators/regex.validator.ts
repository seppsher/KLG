import { AbstractControl, ValidatorFn } from '@angular/forms';

export function regexValidator(regex: RegExp, errorName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }

    const valid = regex.test(control.value);

    return valid ? null : { [errorName]: { value: control.value } };
  };
}
