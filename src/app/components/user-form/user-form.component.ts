import {Component, OnInit} from '@angular/core';
import {SubscriberComponent} from '../subscriber/subscriber.component';
import {makeFormControl} from '../../utils/makeFormGroup';
import {FormGroup} from '@angular/forms';

type Person = {
  name: string;
  surname: string;
  age: number;
  settings: {
    colors: string[];
  };
};

const DEFAULT_PERSON: Person = {
  name: 'хуй',
  surname: '',
  age: 0,
  settings: {
    colors: ['red', 'blue'],
  },
};

const COLORS: string[] = [
  'red',
  'blue',
  'green',
];

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent extends SubscriberComponent implements OnInit {
  personForm: FormGroup;
  colorOptions: string[] = COLORS;

  constructor() {
    super();
    this.personForm = makeFormControl(DEFAULT_PERSON);
  }

  ngOnInit(): void {
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log({form: this.personForm.getRawValue()});
  }

}
