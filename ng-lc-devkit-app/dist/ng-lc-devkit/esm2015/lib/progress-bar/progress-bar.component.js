/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ProgressBarComponent {
    constructor() {
        this.quota = 'quota';
        this.product = 'product';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set progressType(value) {
        this._progressType = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set progressValueOne(value) {
        this._progressValueOne = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set iconTop(value) {
        this._progressIcon = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set progressValueTwo(value) {
        this._progressValueTwo = value;
    }
    /**
     * @return {?}
     */
    get typeName() {
        return this._progressType === 'quota' ? 'Cotas' : 'Produtos';
    }
    /**
     * @return {?}
     */
    get getFirstBottomLabel() {
        return this._progressType === 'quota' ? 'Valor Resgatado' : 'Presenteados';
    }
    /**
     * @return {?}
     */
    get getSecondBottomLabel() {
        return this._progressType === 'quota' ? 'Valor Presenteado' : 'Adicionados';
    }
    /**
     * @return {?}
     */
    get progressValueOne() {
        return this._progressValueOne;
    }
    /**
     * @return {?}
     */
    get progressValueTwo() {
        return this._progressValueTwo;
    }
    /**
     * @return {?}
     */
    get progressIconImage() {
        return this._progressIcon;
    }
    /**
     * @return {?}
     */
    get progressIconSrc() {
        return this._progressType === 'quota' ? 'assets/images/ico-plane-black.svg' : 'assets/images/ico-product.svg';
    }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'lc-progress-bar',
                template: `<div>
  <div class="icon" *ngIf="progressIconImage">
    <figure>
      <img [src]="progressIconSrc" alt="">
    </figure>
    <p>
      {{ typeName }}
    </p>
  </div>
  <div class="texts">
    <span *ngIf="_progressType !== quota" [ngClass]="
      {
      'green' : _progressType === product,
      'pink' : _progressType === quota
      }">{{
      progressValueOne }}</span>
    <span *ngIf="_progressType !== quota">{{ progressValueTwo }}</span>

    <span *ngIf="_progressType === quota" [ngClass]="
      {
      'green' : _progressType === product,
      'pink' : _progressType === quota
      }">{{
      progressValueOne | currency:'BRL' }}
    </span>
    <span *ngIf="_progressType === 'quota'">{{ progressValueTwo | currency:'BRL' }}
    </span>
  </div>
  <mat-progress-bar mode="determinate" value="40" [ngClass]="
    {
    'green' : _progressType === product,
    'pink' : _progressType === quota
    }"></mat-progress-bar>
  <div class="texts">
    <span class="bottom" [ngClass]="
      {
      'green' : _progressType === product,
      'quota' : _progressType === quota
      }">{{
      getFirstBottomLabel }}</span>
    <span class="bottom">{{ getSecondBottomLabel }}</span>
  </div>
</div>


<div class="second-progress-bar">
  <div class="texts">
    <span *ngIf="_progressType !== quota" class="blue">{{
      progressValueOne }}</span>
    <span *ngIf="_progressType !== quota">{{ progressValueTwo }}</span>

    <span *ngIf="_progressType === quota" class="blue">{{
      progressValueOne | currency:'BRL' }}
    </span>
    <span *ngIf="_progressType === quota">{{ progressValueTwo | currency:'BRL' }}
    </span>
  </div>
  <mat-progress-bar mode="determinate" value="40" class="blue"></mat-progress-bar>
  <div class="texts">
    <span class="bottom blue">{{
      getFirstBottomLabel }}</span>
    <span class="bottom">{{ getSecondBottomLabel }}</span>
  </div>
</div>
`
            },] },
];
/** @nocollapse */
ProgressBarComponent.ctorParameters = () => [];
ProgressBarComponent.propDecorators = {
    progressType: [{ type: Input }],
    progressValueOne: [{ type: Input }],
    iconTop: [{ type: Input }],
    progressValueTwo: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ProgressBarComponent.prototype._progressType;
    /** @type {?} */
    ProgressBarComponent.prototype._progressValueOne;
    /** @type {?} */
    ProgressBarComponent.prototype._progressValueTwo;
    /** @type {?} */
    ProgressBarComponent.prototype._progressIcon;
    /** @type {?} */
    ProgressBarComponent.prototype.quota;
    /** @type {?} */
    ProgressBarComponent.prototype.product;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWxjLWRldmtpdC8iLCJzb3VyY2VzIjpbImxpYi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFzRXpELE1BQU07SUFTSjtxQkFIUSxPQUFPO3VCQUNMLFNBQVM7S0FFRjs7OztJQUVqQixRQUFRO0tBQ1A7Ozs7O0lBRUQsSUFBYSxZQUFZLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztLQUM1Qjs7Ozs7SUFFRCxJQUFhLGdCQUFnQixDQUFDLEtBQWE7UUFDekMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztLQUNoQzs7Ozs7SUFFRCxJQUFhLE9BQU8sQ0FBQyxLQUFjO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0tBQzVCOzs7OztJQUVELElBQWEsZ0JBQWdCLENBQUMsS0FBYTtRQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0tBQ2hDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztLQUM5RDs7OztJQUVELElBQUksbUJBQW1CO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztLQUM1RTs7OztJQUVELElBQUksb0JBQW9CO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztLQUM3RTs7OztJQUVELElBQUksZ0JBQWdCO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7S0FDL0I7Ozs7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0tBQy9COzs7O0lBRUQsSUFBSSxpQkFBaUI7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7S0FDM0I7Ozs7SUFFRCxJQUFJLGVBQWU7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUMsK0JBQStCLENBQUE7S0FDOUc7OztZQTVIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBZ0VYO2FBQ0E7Ozs7OzJCQWVFLEtBQUs7K0JBSUwsS0FBSztzQkFJTCxLQUFLOytCQUlMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGMtcHJvZ3Jlc3MtYmFyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2PlxuICA8ZGl2IGNsYXNzPVwiaWNvblwiICpuZ0lmPVwicHJvZ3Jlc3NJY29uSW1hZ2VcIj5cbiAgICA8ZmlndXJlPlxuICAgICAgPGltZyBbc3JjXT1cInByb2dyZXNzSWNvblNyY1wiIGFsdD1cIlwiPlxuICAgIDwvZmlndXJlPlxuICAgIDxwPlxuICAgICAge3sgdHlwZU5hbWUgfX1cbiAgICA8L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidGV4dHNcIj5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgIT09IHF1b3RhXCIgW25nQ2xhc3NdPVwiXG4gICAgICB7XG4gICAgICAnZ3JlZW4nIDogX3Byb2dyZXNzVHlwZSA9PT0gcHJvZHVjdCxcbiAgICAgICdwaW5rJyA6IF9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXG4gICAgICB9XCI+e3tcbiAgICAgIHByb2dyZXNzVmFsdWVPbmUgfX08L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJfcHJvZ3Jlc3NUeXBlICE9PSBxdW90YVwiPnt7IHByb2dyZXNzVmFsdWVUd28gfX08L3NwYW4+XG5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXCIgW25nQ2xhc3NdPVwiXG4gICAgICB7XG4gICAgICAnZ3JlZW4nIDogX3Byb2dyZXNzVHlwZSA9PT0gcHJvZHVjdCxcbiAgICAgICdwaW5rJyA6IF9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXG4gICAgICB9XCI+e3tcbiAgICAgIHByb2dyZXNzVmFsdWVPbmUgfCBjdXJyZW5jeTonQlJMJyB9fVxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgPT09ICdxdW90YSdcIj57eyBwcm9ncmVzc1ZhbHVlVHdvIHwgY3VycmVuY3k6J0JSTCcgfX1cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuICA8bWF0LXByb2dyZXNzLWJhciBtb2RlPVwiZGV0ZXJtaW5hdGVcIiB2YWx1ZT1cIjQwXCIgW25nQ2xhc3NdPVwiXG4gICAge1xuICAgICdncmVlbicgOiBfcHJvZ3Jlc3NUeXBlID09PSBwcm9kdWN0LFxuICAgICdwaW5rJyA6IF9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXG4gICAgfVwiPjwvbWF0LXByb2dyZXNzLWJhcj5cbiAgPGRpdiBjbGFzcz1cInRleHRzXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJib3R0b21cIiBbbmdDbGFzc109XCJcbiAgICAgIHtcbiAgICAgICdncmVlbicgOiBfcHJvZ3Jlc3NUeXBlID09PSBwcm9kdWN0LFxuICAgICAgJ3F1b3RhJyA6IF9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXG4gICAgICB9XCI+e3tcbiAgICAgIGdldEZpcnN0Qm90dG9tTGFiZWwgfX08L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJib3R0b21cIj57eyBnZXRTZWNvbmRCb3R0b21MYWJlbCB9fTwvc3Bhbj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuXG48ZGl2IGNsYXNzPVwic2Vjb25kLXByb2dyZXNzLWJhclwiPlxuICA8ZGl2IGNsYXNzPVwidGV4dHNcIj5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgIT09IHF1b3RhXCIgY2xhc3M9XCJibHVlXCI+e3tcbiAgICAgIHByb2dyZXNzVmFsdWVPbmUgfX08L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJfcHJvZ3Jlc3NUeXBlICE9PSBxdW90YVwiPnt7IHByb2dyZXNzVmFsdWVUd28gfX08L3NwYW4+XG5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXCIgY2xhc3M9XCJibHVlXCI+e3tcbiAgICAgIHByb2dyZXNzVmFsdWVPbmUgfCBjdXJyZW5jeTonQlJMJyB9fVxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXCI+e3sgcHJvZ3Jlc3NWYWx1ZVR3byB8IGN1cnJlbmN5OidCUkwnIH19XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgPG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImRldGVybWluYXRlXCIgdmFsdWU9XCI0MFwiIGNsYXNzPVwiYmx1ZVwiPjwvbWF0LXByb2dyZXNzLWJhcj5cbiAgPGRpdiBjbGFzcz1cInRleHRzXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJib3R0b20gYmx1ZVwiPnt7XG4gICAgICBnZXRGaXJzdEJvdHRvbUxhYmVsIH19PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiYm90dG9tXCI+e3sgZ2V0U2Vjb25kQm90dG9tTGFiZWwgfX08L3NwYW4+XG4gIDwvZGl2PlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgX3Byb2dyZXNzVHlwZTogc3RyaW5nO1xuICBfcHJvZ3Jlc3NWYWx1ZU9uZTogbnVtYmVyO1xuICBfcHJvZ3Jlc3NWYWx1ZVR3bzogbnVtYmVyO1xuICBfcHJvZ3Jlc3NJY29uOiBib29sZWFuO1xuXG4gIHF1b3RhID0gJ3F1b3RhJztcbiAgcHJvZHVjdCA9ICdwcm9kdWN0JztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHByb2dyZXNzVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvZ3Jlc3NUeXBlID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgcHJvZ3Jlc3NWYWx1ZU9uZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcHJvZ3Jlc3NWYWx1ZU9uZSA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGljb25Ub3AodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9wcm9ncmVzc0ljb24gPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBwcm9ncmVzc1ZhbHVlVHdvKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wcm9ncmVzc1ZhbHVlVHdvID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdHlwZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzVHlwZSA9PT0gJ3F1b3RhJyA/ICdDb3RhcycgOiAnUHJvZHV0b3MnO1xuICB9XG5cbiAgZ2V0IGdldEZpcnN0Qm90dG9tTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzVHlwZSA9PT0gJ3F1b3RhJyA/ICdWYWxvciBSZXNnYXRhZG8nIDogJ1ByZXNlbnRlYWRvcyc7XG4gIH1cblxuICBnZXQgZ2V0U2Vjb25kQm90dG9tTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzVHlwZSA9PT0gJ3F1b3RhJyA/ICdWYWxvciBQcmVzZW50ZWFkbycgOiAnQWRpY2lvbmFkb3MnO1xuICB9XG5cbiAgZ2V0IHByb2dyZXNzVmFsdWVPbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzVmFsdWVPbmU7XG4gIH1cblxuICBnZXQgcHJvZ3Jlc3NWYWx1ZVR3bygpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NWYWx1ZVR3bztcbiAgfVxuXG4gIGdldCBwcm9ncmVzc0ljb25JbWFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NJY29uO1xuICB9XG5cbiAgZ2V0IHByb2dyZXNzSWNvblNyYygpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NUeXBlID09PSAncXVvdGEnID8gJ2Fzc2V0cy9pbWFnZXMvaWNvLXBsYW5lLWJsYWNrLnN2ZycgOiAnYXNzZXRzL2ltYWdlcy9pY28tcHJvZHVjdC5zdmcnXG4gIH1cblxufVxuIl19