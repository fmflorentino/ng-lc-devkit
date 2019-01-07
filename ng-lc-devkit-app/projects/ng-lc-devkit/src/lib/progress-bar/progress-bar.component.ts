import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lc-progress-bar',
  templateUrl: './progress-bar.component.html'
})
export class ProgressBarComponent implements OnInit {
  _progressType: string;
  _progressValueOne: number;
  _progressValueTwo: number;
  _progressIcon: boolean;

  quota = 'quota';
  product = 'product';

  constructor() { }

  ngOnInit() {
  }

  @Input() set progressType(value: string) {
    this._progressType = value;
  }

  @Input() set progressValueOne(value: number) {
    this._progressValueOne = value;
  }

  @Input() set iconTop(value: boolean) {
    this._progressIcon = value;
  }

  @Input() set progressValueTwo(value: number) {
    this._progressValueTwo = value;
  }

  get typeName() {
    return this._progressType === 'quota' ? 'Cotas' : 'Produtos';
  }

  get getFirstBottomLabel() {
    return this._progressType === 'quota' ? 'Valor Resgatado' : 'Presenteados';
  }

  get getSecondBottomLabel() {
    return this._progressType === 'quota' ? 'Valor Presenteado' : 'Adicionados';
  }

  get progressValueOne() {
    return this._progressValueOne;
  }

  get progressValueTwo() {
    return this._progressValueTwo;
  }

  get progressIconImage() {
    return this._progressIcon;
  }

  get progressIconSrc() {
    return this._progressType === 'quota' ? 'assets/images/ico-plane-black.svg' : 'assets/images/ico-product.svg'
  }

}
