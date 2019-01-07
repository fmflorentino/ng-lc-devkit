/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent() {
    }
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(DatepickerComponent.prototype, "labelText", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._labelText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatepickerComponent.prototype, "labelTextView", {
        get: /**
         * @return {?}
         */
        function () {
            return this._labelText;
        },
        enumerable: true,
        configurable: true
    });
    DatepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lc-datepicker',
                    template: "<div (click)=\"picker.open()\">\n  <label>{{ labelTextView }}</label>\n  <input [matDatepicker]=\"picker\">\n  <mat-datepicker #picker id=\"datePicker\"></mat-datepicker>\n</div>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    DatepickerComponent.ctorParameters = function () { return []; };
    DatepickerComponent.propDecorators = {
        labelText: [{ type: Input }]
    };
    return DatepickerComponent;
}());
export { DatepickerComponent };
if (false) {
    /** @type {?} */
    DatepickerComponent.prototype._labelText;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1sYy1kZXZraXQvIiwic291cmNlcyI6WyJsaWIvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBZ0J2RDtLQUFpQjs7OztJQUVqQixzQ0FBUTs7O0lBQVI7S0FFQztJQUVELHNCQUFhLDBDQUFTOzs7OztRQUF0QixVQUF1QixLQUFhO1lBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCOzs7T0FBQTtJQUVELHNCQUFJLDhDQUFhOzs7O1FBQWpCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7OztPQUFBOztnQkExQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsc0xBS1g7b0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7Ozs0QkFXRSxLQUFLOzs4QkF0QlI7O1NBWWEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xjLWRhdGVwaWNrZXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgKGNsaWNrKT1cInBpY2tlci5vcGVuKClcIj5cbiAgPGxhYmVsPnt7IGxhYmVsVGV4dFZpZXcgfX08L2xhYmVsPlxuICA8aW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCI+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyIGlkPVwiZGF0ZVBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXI+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBfbGFiZWxUZXh0OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgQElucHV0KCkgc2V0IGxhYmVsVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGFiZWxUZXh0ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbGFiZWxUZXh0VmlldygpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWxUZXh0O1xuICB9XG5cbn1cbiJdfQ==