import { Component, OnInit, Input } from '@angular/core';
// import { slideStateTrigger, markedTrigger } from '../../animations';

@Component({
  selector: 'lc-timeline-item',
  templateUrl: './timeline-item.component.html',
  // animations: [ slideStateTrigger, markedTrigger ]
})
export class TimelineItemComponent implements OnInit {
  _movimentationItem: any;
  showItemDetail: boolean;

  constructor() {
    this.showItemDetail = false;
  }

  ngOnInit() {
  }

  @Input() set movimentation(value: any) {
    this._movimentationItem = value;
  }

  get movimentationType(): string {
    return this._movimentationItem.movementType;
  }

  get getMovimentationName(): string {
    return this.getMovimentationNameValidation();
  }

  get getMovimentationValue(): number {
    return this._movimentationItem.movementValue;
  }

  getMovimentationNameValidation(): string {
    if (this._movimentationItem.movementType === 'rescue' && this._movimentationItem.movementCategory === 'product') {
      return 'Resgate de Produto';
    } else if (this._movimentationItem.movementType === 'credit' && this._movimentationItem.movementCategory === 'product') {
      return 'Crédito de Produto';
    } else if (this._movimentationItem.movementType === 'credit' && this._movimentationItem.movementCategory === 'quota') {
      return 'Crédito de Cota';
    } else if (this._movimentationItem.movementType === 'rescue' && this._movimentationItem.movementCategory === 'quota') {
      return 'Resgate de Cota';
    } else {
      return 'nulo';
    }
  }

  actionShowItemDetail(): void {
    this.showItemDetail = !this.showItemDetail;
  }
}
