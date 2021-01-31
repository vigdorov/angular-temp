import {FormControl, FormGroup, Validators} from '@angular/forms';

export const makeFormControl = <T extends object>(formObject: T) => {
  return new FormGroup(
    Object.entries(formObject).reduce((acc, [key, value]) => {
      return {
        ...acc,
        [key]: typeof value === 'object' && value !== null && !Array.isArray(value) ? makeFormControl(value) : new FormControl(value),
      };
    }, {})
  );
};
