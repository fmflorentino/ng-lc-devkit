/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var TimelineItemComponent = /** @class */ (function () {
    function TimelineItemComponent() {
        this.showItemDetail = false;
    }
    /**
     * @return {?}
     */
    TimelineItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(TimelineItemComponent.prototype, "movimentation", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._movimentationItem = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimelineItemComponent.prototype, "movimentationType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._movimentationItem.movementType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimelineItemComponent.prototype, "getMovimentationName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getMovimentationNameValidation();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimelineItemComponent.prototype, "getMovimentationValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._movimentationItem.movementValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TimelineItemComponent.prototype.getMovimentationNameValidation = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    TimelineItemComponent.prototype.actionShowItemDetail = /**
     * @return {?}
     */
    function () {
        this.showItemDetail = !this.showItemDetail;
    };
    TimelineItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lc-timeline-item',
                    template: "<div class=\"row\">\n  <div class=\"button-action col-auto\">\n    <button\n      mat-raised-button\n      class=\"fab-more\"\n      [ngClass]=\"\n        { 'rescue': movimentationType === 'rescue' }\n      \"\n      (click)=\"actionShowItemDetail()\"\n      >\n      <span> {{ movimentationType === 'rescue' ? '-' : '+' }} </span>\n    </button>\n  </div>\n\n  <div class=\"text-content col-auto\" (click)=\"actionShowItemDetail()\">\n    <p [ngClass]=\"{ 'rescue': movimentationType === 'rescue' }\">{{ getMovimentationName }}</p>\n    <span>\n      Kitchenaid Batedeira Planet\u00E1ria 6 velocidades\n    </span>\n  </div>\n\n  <div class=\"col-auto value\">\n    <span [ngClass]=\"{ 'rescue': movimentationType === 'rescue' }\">\n      {{ movimentationType === 'rescue' ? '-'  : '+'}} {{ getMovimentationValue | currency:'BRL' }}\n    </span>\n  </div>\n\n  <div class=\"col-12\" style=\"overflow: hidden;\" *ngIf=\"showItemDetail\">\n    <lc-timeline-item-detail *ngIf=\"showItemDetail\"></lc-timeline-item-detail>\n  </div>\n\n  <!-- <div class=\"col-12\" style=\"overflow: hidden;\" @slideState *ngIf=\"showItemDetail\">\n    <app-timeline-item-detail @slideState *ngIf=\"showItemDetail\"></app-timeline-item-detail>\n  </div> -->\n\n</div>\n",
                },] },
    ];
    /** @nocollapse */
    TimelineItemComponent.ctorParameters = function () { return []; };
    TimelineItemComponent.propDecorators = {
        movimentation: [{ type: Input }]
    };
    return TimelineItemComponent;
}());
export { TimelineItemComponent };
if (false) {
    /** @type {?} */
    TimelineItemComponent.prototype._movimentationItem;
    /** @type {?} */
    TimelineItemComponent.prototype.showItemDetail;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1sYy1kZXZraXQvIiwic291cmNlcyI6WyJsaWIvdGltZWxpbmUtaXRlbS90aW1lbGluZS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBZ0R2RDtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0tBQzdCOzs7O0lBRUQsd0NBQVE7OztJQUFSO0tBQ0M7SUFFRCxzQkFBYSxnREFBYTs7Ozs7UUFBMUIsVUFBMkIsS0FBVTtZQUNuQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1NBQ2pDOzs7T0FBQTtJQUVELHNCQUFJLG9EQUFpQjs7OztRQUFyQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDO1NBQzdDOzs7T0FBQTtJQUVELHNCQUFJLHVEQUFvQjs7OztRQUF4QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztTQUM5Qzs7O09BQUE7SUFFRCxzQkFBSSx3REFBcUI7Ozs7UUFBekI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztTQUM5Qzs7O09BQUE7Ozs7SUFFRCw4REFBOEI7OztJQUE5QjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2hILE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztTQUM3QjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN2SCxNQUFNLENBQUMsb0JBQW9CLENBQUM7U0FDN0I7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDckgsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1NBQzFCO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3JILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztTQUMxQjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNmO0tBQ0Y7Ozs7SUFFRCxvREFBb0I7OztJQUFwQjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0tBQzVDOztnQkFwRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxtdUNBb0NYO2lCQUVBOzs7OztnQ0FZRSxLQUFLOztnQ0F2RFI7O1NBNENhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgc2xpZGVTdGF0ZVRyaWdnZXIsIG1hcmtlZFRyaWdnZXIgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGMtdGltZWxpbmUtaXRlbScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInJvd1wiPlxuICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWFjdGlvbiBjb2wtYXV0b1wiPlxuICAgIDxidXR0b25cbiAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICBjbGFzcz1cImZhYi1tb3JlXCJcbiAgICAgIFtuZ0NsYXNzXT1cIlxuICAgICAgICB7ICdyZXNjdWUnOiBtb3ZpbWVudGF0aW9uVHlwZSA9PT0gJ3Jlc2N1ZScgfVxuICAgICAgXCJcbiAgICAgIChjbGljayk9XCJhY3Rpb25TaG93SXRlbURldGFpbCgpXCJcbiAgICAgID5cbiAgICAgIDxzcGFuPiB7eyBtb3ZpbWVudGF0aW9uVHlwZSA9PT0gJ3Jlc2N1ZScgPyAnLScgOiAnKycgfX0gPC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwidGV4dC1jb250ZW50IGNvbC1hdXRvXCIgKGNsaWNrKT1cImFjdGlvblNob3dJdGVtRGV0YWlsKClcIj5cbiAgICA8cCBbbmdDbGFzc109XCJ7ICdyZXNjdWUnOiBtb3ZpbWVudGF0aW9uVHlwZSA9PT0gJ3Jlc2N1ZScgfVwiPnt7IGdldE1vdmltZW50YXRpb25OYW1lIH19PC9wPlxuICAgIDxzcGFuPlxuICAgICAgS2l0Y2hlbmFpZCBCYXRlZGVpcmEgUGxhbmV0w6FyaWEgNiB2ZWxvY2lkYWRlc1xuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIHZhbHVlXCI+XG4gICAgPHNwYW4gW25nQ2xhc3NdPVwieyAncmVzY3VlJzogbW92aW1lbnRhdGlvblR5cGUgPT09ICdyZXNjdWUnIH1cIj5cbiAgICAgIHt7IG1vdmltZW50YXRpb25UeXBlID09PSAncmVzY3VlJyA/ICctJyAgOiAnKyd9fSB7eyBnZXRNb3ZpbWVudGF0aW9uVmFsdWUgfCBjdXJyZW5jeTonQlJMJyB9fVxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC0xMlwiIHN0eWxlPVwib3ZlcmZsb3c6IGhpZGRlbjtcIiAqbmdJZj1cInNob3dJdGVtRGV0YWlsXCI+XG4gICAgPGxjLXRpbWVsaW5lLWl0ZW0tZGV0YWlsICpuZ0lmPVwic2hvd0l0ZW1EZXRhaWxcIj48L2xjLXRpbWVsaW5lLWl0ZW0tZGV0YWlsPlxuICA8L2Rpdj5cblxuICA8IS0tIDxkaXYgY2xhc3M9XCJjb2wtMTJcIiBzdHlsZT1cIm92ZXJmbG93OiBoaWRkZW47XCIgQHNsaWRlU3RhdGUgKm5nSWY9XCJzaG93SXRlbURldGFpbFwiPlxuICAgIDxhcHAtdGltZWxpbmUtaXRlbS1kZXRhaWwgQHNsaWRlU3RhdGUgKm5nSWY9XCJzaG93SXRlbURldGFpbFwiPjwvYXBwLXRpbWVsaW5lLWl0ZW0tZGV0YWlsPlxuICA8L2Rpdj4gLS0+XG5cbjwvZGl2PlxuYCxcbiAgLy8gYW5pbWF0aW9uczogWyBzbGlkZVN0YXRlVHJpZ2dlciwgbWFya2VkVHJpZ2dlciBdXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIF9tb3ZpbWVudGF0aW9uSXRlbTogYW55O1xuICBzaG93SXRlbURldGFpbDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNob3dJdGVtRGV0YWlsID0gZmFsc2U7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBtb3ZpbWVudGF0aW9uKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG1vdmltZW50YXRpb25UeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vdmltZW50YXRpb25JdGVtLm1vdmVtZW50VHlwZTtcbiAgfVxuXG4gIGdldCBnZXRNb3ZpbWVudGF0aW9uTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldE1vdmltZW50YXRpb25OYW1lVmFsaWRhdGlvbigpO1xuICB9XG5cbiAgZ2V0IGdldE1vdmltZW50YXRpb25WYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbS5tb3ZlbWVudFZhbHVlO1xuICB9XG5cbiAgZ2V0TW92aW1lbnRhdGlvbk5hbWVWYWxpZGF0aW9uKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX21vdmltZW50YXRpb25JdGVtLm1vdmVtZW50VHlwZSA9PT0gJ3Jlc2N1ZScgJiYgdGhpcy5fbW92aW1lbnRhdGlvbkl0ZW0ubW92ZW1lbnRDYXRlZ29yeSA9PT0gJ3Byb2R1Y3QnKSB7XG4gICAgICByZXR1cm4gJ1Jlc2dhdGUgZGUgUHJvZHV0byc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbS5tb3ZlbWVudFR5cGUgPT09ICdjcmVkaXQnICYmIHRoaXMuX21vdmltZW50YXRpb25JdGVtLm1vdmVtZW50Q2F0ZWdvcnkgPT09ICdwcm9kdWN0Jykge1xuICAgICAgcmV0dXJuICdDcsOpZGl0byBkZSBQcm9kdXRvJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX21vdmltZW50YXRpb25JdGVtLm1vdmVtZW50VHlwZSA9PT0gJ2NyZWRpdCcgJiYgdGhpcy5fbW92aW1lbnRhdGlvbkl0ZW0ubW92ZW1lbnRDYXRlZ29yeSA9PT0gJ3F1b3RhJykge1xuICAgICAgcmV0dXJuICdDcsOpZGl0byBkZSBDb3RhJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX21vdmltZW50YXRpb25JdGVtLm1vdmVtZW50VHlwZSA9PT0gJ3Jlc2N1ZScgJiYgdGhpcy5fbW92aW1lbnRhdGlvbkl0ZW0ubW92ZW1lbnRDYXRlZ29yeSA9PT0gJ3F1b3RhJykge1xuICAgICAgcmV0dXJuICdSZXNnYXRlIGRlIENvdGEnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ251bG8nO1xuICAgIH1cbiAgfVxuXG4gIGFjdGlvblNob3dJdGVtRGV0YWlsKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0l0ZW1EZXRhaWwgPSAhdGhpcy5zaG93SXRlbURldGFpbDtcbiAgfVxufVxuIl19