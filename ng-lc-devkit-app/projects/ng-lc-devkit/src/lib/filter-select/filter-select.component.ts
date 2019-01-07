import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lc-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.css']
})
export class FilterSelectComponent implements OnInit {

  @Output() throwFilterSelected: EventEmitter<any> = new EventEmitter();
  filterSelected: any;

  constructor() { }

  ngOnInit() {
  }

  filterEvent(event: any) {
    if (event.target.value) {
      this.filterSelected = event.target.value;
      this.throwFilterSelected.emit(this.filterSelected);
    }
  }

  get filterText() {
    return this.filterSelected ? this.filterSelected : 'Filtrar';
  }

}
