/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class DatepickerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set labelText(value) {
        this._labelText = value;
    }
    /**
     * @return {?}
     */
    get labelTextView() {
        return this._labelText;
    }
}
DatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'lc-datepicker',
                template: `<div (click)="picker.open()">
  <label>{{ labelTextView }}</label>
  <input [matDatepicker]="picker">
  <mat-datepicker #picker id="datePicker"></mat-datepicker>
</div>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
DatepickerComponent.ctorParameters = () => [];
DatepickerComponent.propDecorators = {
    labelText: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DatepickerComponent.prototype._labelText;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1sYy1kZXZraXQvIiwic291cmNlcyI6WyJsaWIvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFZekQsTUFBTTtJQUlKLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBRVA7Ozs7O0lBRUQsSUFBYSxTQUFTLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztLQUN6Qjs7OztJQUVELElBQUksYUFBYTtRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7O0NBS1g7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7O3dCQVdFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGMtZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgPGRpdiAoY2xpY2spPVwicGlja2VyLm9wZW4oKVwiPlxuICA8bGFiZWw+e3sgbGFiZWxUZXh0VmlldyB9fTwvbGFiZWw+XG4gIDxpbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIj5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXIgaWQ9XCJkYXRlUGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIF9sYWJlbFRleHQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBASW5wdXQoKSBzZXQgbGFiZWxUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYWJlbFRleHQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBsYWJlbFRleHRWaWV3KCkge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbFRleHQ7XG4gIH1cblxufVxuIl19