import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lc-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  _labelText: string;

  constructor() { }

  ngOnInit() {

  }

  @Input() set labelText(value: string) {
    this._labelText = value;
  }

  get labelTextView() {
    return this._labelText;
  }

}
