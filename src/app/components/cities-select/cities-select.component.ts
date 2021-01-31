import {Component, Input, OnInit} from '@angular/core';
import {makeFormControl} from '../../utils/makeFormGroup';
import {FormControl} from '@angular/forms';

const OPTIONS = [
  'Moscow',
  'London',
];

@Component({
  selector: 'app-cities-select',
  templateUrl: './cities-select.component.html',
  styleUrls: ['./cities-select.component.scss']
})
export class CitiesSelectComponent implements OnInit {
  options = OPTIONS;
  cityGroup: FormControl;

  constructor() {
    this.cityGroup = makeFormControl({
      city: '',
    });
  }


  ngOnInit(): void {
  }

}
