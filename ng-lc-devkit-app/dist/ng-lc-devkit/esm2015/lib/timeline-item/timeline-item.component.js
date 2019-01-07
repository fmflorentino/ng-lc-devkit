/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class TimelineItemComponent {
    constructor() {
        this.showItemDetail = false;
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
    set movimentation(value) {
        this._movimentationItem = value;
    }
    /**
     * @return {?}
     */
    get movimentationType() {
        return this._movimentationItem.movementType;
    }
    /**
     * @return {?}
     */
    get getMovimentationName() {
        return this.getMovimentationNameValidation();
    }
    /**
     * @return {?}
     */
    get getMovimentationValue() {
        return this._movimentationItem.movementValue;
    }
    /**
     * @return {?}
     */
    getMovimentationNameValidation() {
        if (this._movimentationItem.movementType === 'rescue' && this._movimentationItem.movementCategory === 'product') {
            return 'Resgate de Produto';
        }
        else if (this._movimentationItem.movementType === 'credit' && this._movimentationItem.movementCategory === 'product') {
            return 'Crédito de Produto';
        }
        else if (this._movimentationItem.movementType === 'credit' && this._movimentationItem.movementCategory === 'quota') {
            return 'Crédito de Cota';
        }
        else if (this._movimentationItem.movementType === 'rescue' && this._movimentationItem.movementCategory === 'quota') {
            return 'Resgate de Cota';
        }
        else {
            return 'nulo';
        }
    }
    /**
     * @return {?}
     */
    actionShowItemDetail() {
        this.showItemDetail = !this.showItemDetail;
    }
}
TimelineItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'lc-timeline-item',
                template: `<div class="row">
  <div class="button-action col-auto">
    <button
      mat-raised-button
      class="fab-more"
      [ngClass]="
        { 'rescue': movimentationType === 'rescue' }
      "
      (click)="actionShowItemDetail()"
      >
      <span> {{ movimentationType === 'rescue' ? '-' : '+' }} </span>
    </button>
  </div>

  <div class="text-content col-auto" (click)="actionShowItemDetail()">
    <p [ngClass]="{ 'rescue': movimentationType === 'rescue' }">{{ getMovimentationName }}</p>
    <span>
      Kitchenaid Batedeira Planetária 6 velocidades
    </span>
  </div>

  <div class="col-auto value">
    <span [ngClass]="{ 'rescue': movimentationType === 'rescue' }">
      {{ movimentationType === 'rescue' ? '-'  : '+'}} {{ getMovimentationValue | currency:'BRL' }}
    </span>
  </div>

  <div class="col-12" style="overflow: hidden;" *ngIf="showItemDetail">
    <lc-timeline-item-detail *ngIf="showItemDetail"></lc-timeline-item-detail>
  </div>

  <!-- <div class="col-12" style="overflow: hidden;" @slideState *ngIf="showItemDetail">
    <app-timeline-item-detail @slideState *ngIf="showItemDetail"></app-timeline-item-detail>
  </div> -->

</div>
`,
            },] },
];
/** @nocollapse */
TimelineItemComponent.ctorParameters = () => [];
TimelineItemComponent.propDecorators = {
    movimentation: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TimelineItemComponent.prototype._movimentationItem;
    /** @type {?} */
    TimelineItemComponent.prototype.showItemDetail;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1sYy1kZXZraXQvIiwic291cmNlcyI6WyJsaWIvdGltZWxpbmUtaXRlbS90aW1lbGluZS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUE0Q3pELE1BQU07SUFJSjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0tBQzdCOzs7O0lBRUQsUUFBUTtLQUNQOzs7OztJQUVELElBQWEsYUFBYSxDQUFDLEtBQVU7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztLQUNqQzs7OztJQUVELElBQUksaUJBQWlCO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDO0tBQzdDOzs7O0lBRUQsSUFBSSxvQkFBb0I7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO0tBQzlDOzs7O0lBRUQsSUFBSSxxQkFBcUI7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUM7S0FDOUM7Ozs7SUFFRCw4QkFBOEI7UUFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDaEgsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1NBQzdCO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZILE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztTQUM3QjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNySCxNQUFNLENBQUMsaUJBQWlCLENBQUM7U0FDMUI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDckgsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1NBQzFCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ2Y7S0FDRjs7OztJQUVELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztLQUM1Qzs7O1lBcEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9DWDthQUVBOzs7Ozs0QkFZRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBzbGlkZVN0YXRlVHJpZ2dlciwgbWFya2VkVHJpZ2dlciB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYy10aW1lbGluZS1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJidXR0b24tYWN0aW9uIGNvbC1hdXRvXCI+XG4gICAgPGJ1dHRvblxuICAgICAgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgIGNsYXNzPVwiZmFiLW1vcmVcIlxuICAgICAgW25nQ2xhc3NdPVwiXG4gICAgICAgIHsgJ3Jlc2N1ZSc6IG1vdmltZW50YXRpb25UeXBlID09PSAncmVzY3VlJyB9XG4gICAgICBcIlxuICAgICAgKGNsaWNrKT1cImFjdGlvblNob3dJdGVtRGV0YWlsKClcIlxuICAgICAgPlxuICAgICAgPHNwYW4+IHt7IG1vdmltZW50YXRpb25UeXBlID09PSAncmVzY3VlJyA/ICctJyA6ICcrJyB9fSA8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJ0ZXh0LWNvbnRlbnQgY29sLWF1dG9cIiAoY2xpY2spPVwiYWN0aW9uU2hvd0l0ZW1EZXRhaWwoKVwiPlxuICAgIDxwIFtuZ0NsYXNzXT1cInsgJ3Jlc2N1ZSc6IG1vdmltZW50YXRpb25UeXBlID09PSAncmVzY3VlJyB9XCI+e3sgZ2V0TW92aW1lbnRhdGlvbk5hbWUgfX08L3A+XG4gICAgPHNwYW4+XG4gICAgICBLaXRjaGVuYWlkIEJhdGVkZWlyYSBQbGFuZXTDoXJpYSA2IHZlbG9jaWRhZGVzXG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gdmFsdWVcIj5cbiAgICA8c3BhbiBbbmdDbGFzc109XCJ7ICdyZXNjdWUnOiBtb3ZpbWVudGF0aW9uVHlwZSA9PT0gJ3Jlc2N1ZScgfVwiPlxuICAgICAge3sgbW92aW1lbnRhdGlvblR5cGUgPT09ICdyZXNjdWUnID8gJy0nICA6ICcrJ319IHt7IGdldE1vdmltZW50YXRpb25WYWx1ZSB8IGN1cnJlbmN5OidCUkwnIH19XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgc3R5bGU9XCJvdmVyZmxvdzogaGlkZGVuO1wiICpuZ0lmPVwic2hvd0l0ZW1EZXRhaWxcIj5cbiAgICA8bGMtdGltZWxpbmUtaXRlbS1kZXRhaWwgKm5nSWY9XCJzaG93SXRlbURldGFpbFwiPjwvbGMtdGltZWxpbmUtaXRlbS1kZXRhaWw+XG4gIDwvZGl2PlxuXG4gIDwhLS0gPGRpdiBjbGFzcz1cImNvbC0xMlwiIHN0eWxlPVwib3ZlcmZsb3c6IGhpZGRlbjtcIiBAc2xpZGVTdGF0ZSAqbmdJZj1cInNob3dJdGVtRGV0YWlsXCI+XG4gICAgPGFwcC10aW1lbGluZS1pdGVtLWRldGFpbCBAc2xpZGVTdGF0ZSAqbmdJZj1cInNob3dJdGVtRGV0YWlsXCI+PC9hcHAtdGltZWxpbmUtaXRlbS1kZXRhaWw+XG4gIDwvZGl2PiAtLT5cblxuPC9kaXY+XG5gLFxuICAvLyBhbmltYXRpb25zOiBbIHNsaWRlU3RhdGVUcmlnZ2VyLCBtYXJrZWRUcmlnZ2VyIF1cbn0pXG5leHBvcnQgY2xhc3MgVGltZWxpbmVJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgX21vdmltZW50YXRpb25JdGVtOiBhbnk7XG4gIHNob3dJdGVtRGV0YWlsOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2hvd0l0ZW1EZXRhaWwgPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgQElucHV0KCkgc2V0IG1vdmltZW50YXRpb24odmFsdWU6IGFueSkge1xuICAgIHRoaXMuX21vdmltZW50YXRpb25JdGVtID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbW92aW1lbnRhdGlvblR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbW92aW1lbnRhdGlvbkl0ZW0ubW92ZW1lbnRUeXBlO1xuICB9XG5cbiAgZ2V0IGdldE1vdmltZW50YXRpb25OYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TW92aW1lbnRhdGlvbk5hbWVWYWxpZGF0aW9uKCk7XG4gIH1cblxuICBnZXQgZ2V0TW92aW1lbnRhdGlvblZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21vdmltZW50YXRpb25JdGVtLm1vdmVtZW50VmFsdWU7XG4gIH1cblxuICBnZXRNb3ZpbWVudGF0aW9uTmFtZVZhbGlkYXRpb24oKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5fbW92aW1lbnRhdGlvbkl0ZW0ubW92ZW1lbnRUeXBlID09PSAncmVzY3VlJyAmJiB0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbS5tb3ZlbWVudENhdGVnb3J5ID09PSAncHJvZHVjdCcpIHtcbiAgICAgIHJldHVybiAnUmVzZ2F0ZSBkZSBQcm9kdXRvJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX21vdmltZW50YXRpb25JdGVtLm1vdmVtZW50VHlwZSA9PT0gJ2NyZWRpdCcgJiYgdGhpcy5fbW92aW1lbnRhdGlvbkl0ZW0ubW92ZW1lbnRDYXRlZ29yeSA9PT0gJ3Byb2R1Y3QnKSB7XG4gICAgICByZXR1cm4gJ0Nyw6lkaXRvIGRlIFByb2R1dG8nO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fbW92aW1lbnRhdGlvbkl0ZW0ubW92ZW1lbnRUeXBlID09PSAnY3JlZGl0JyAmJiB0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbS5tb3ZlbWVudENhdGVnb3J5ID09PSAncXVvdGEnKSB7XG4gICAgICByZXR1cm4gJ0Nyw6lkaXRvIGRlIENvdGEnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fbW92aW1lbnRhdGlvbkl0ZW0ubW92ZW1lbnRUeXBlID09PSAncmVzY3VlJyAmJiB0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbS5tb3ZlbWVudENhdGVnb3J5ID09PSAncXVvdGEnKSB7XG4gICAgICByZXR1cm4gJ1Jlc2dhdGUgZGUgQ290YSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnbnVsbyc7XG4gICAgfVxuICB9XG5cbiAgYWN0aW9uU2hvd0l0ZW1EZXRhaWwoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93SXRlbURldGFpbCA9ICF0aGlzLnNob3dJdGVtRGV0YWlsO1xuICB9XG59XG4iXX0=