/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var TimelineTabsComponent = /** @class */ (function () {
    function TimelineTabsComponent() {
        this.daysAsLineItem = [
            {
                label: 'Hoje',
                movement: [
                    { movementType: 'credit', movementCategory: 'product', movementValue: 3900 },
                    { movementType: 'credit', movementCategory: 'quota', movementValue: 90300 },
                ]
            },
            {
                label: '26 de Outubro',
                movement: [
                    { movementType: 'rescue', movementCategory: 'quota', movementValue: 890000 },
                ]
            },
            {
                label: '25 de Outubro',
                movement: [
                    { movementType: 'credit', movementCategory: 'quota', movementValue: 785763 },
                    { movementType: 'credit', movementCategory: 'product', movementValue: 54009 },
                ]
            },
            {
                label: '26 de Outubro',
                movement: [
                    { movementType: 'rescue', movementCategory: 'product', movementValue: 76548900 },
                ]
            },
        ];
    }
    /**
     * @return {?}
     */
    TimelineTabsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TimelineTabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lc-timeline-tabs',
                    template: "<mat-tab-group>\n  <mat-tab label=\"Tudo\">\n    <div *ngFor=\"let day of daysAsLineItem\">\n      <mat-chip-list>\n        <mat-chip>{{ day.label }}</mat-chip>\n      </mat-chip-list>\n      <div class=\"timeline-line\">\n        <lc-timeline-item\n          *ngFor=\"let movement of day.movement\"\n          [movimentation]=\"movement\"\n        ></lc-timeline-item>\n      </div>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Cr\u00E9dito\" class=\"center\"> </mat-tab>\n  <mat-tab label=\"Resgates\"> </mat-tab>\n  <mat-tab label=\"Futuro\"></mat-tab>\n</mat-tab-group>\n",
                },] },
    ];
    /** @nocollapse */
    TimelineTabsComponent.ctorParameters = function () { return []; };
    return TimelineTabsComponent;
}());
export { TimelineTabsComponent };
if (false) {
    /** @type {?} */
    TimelineTabsComponent.prototype.daysAsLineItem;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtdGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1sYy1kZXZraXQvIiwic291cmNlcyI6WyJsaWIvdGltZWxpbmUtdGFicy90aW1lbGluZS10YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7SUF1RGhEOzhCQTdCd0I7WUFDcEI7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFO29CQUNSLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRTtvQkFDNUUsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFO2lCQUM1RTthQUNGO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLFFBQVEsRUFBRTtvQkFDUixFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUU7aUJBQzdFO2FBQ0Q7WUFDRDtnQkFDQyxLQUFLLEVBQUUsZUFBZTtnQkFDdEIsUUFBUSxFQUFFO29CQUNSLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRTtvQkFDNUUsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFO2lCQUM5RTthQUNEO1lBQ0Q7Z0JBQ0MsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLFFBQVEsRUFBRTtvQkFDUixFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUU7aUJBQ2pGO2FBQ0Q7U0FDTDtLQUVnQjs7OztJQUVqQix3Q0FBUTs7O0lBQVI7S0FDQzs7Z0JBeERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsa2tCQWtCWDtpQkFDQTs7OztnQ0F2QkQ7O1NBd0JhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xjLXRpbWVsaW5lLXRhYnMnLFxuICB0ZW1wbGF0ZTogYDxtYXQtdGFiLWdyb3VwPlxuICA8bWF0LXRhYiBsYWJlbD1cIlR1ZG9cIj5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBkYXkgb2YgZGF5c0FzTGluZUl0ZW1cIj5cbiAgICAgIDxtYXQtY2hpcC1saXN0PlxuICAgICAgICA8bWF0LWNoaXA+e3sgZGF5LmxhYmVsIH19PC9tYXQtY2hpcD5cbiAgICAgIDwvbWF0LWNoaXAtbGlzdD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1saW5lXCI+XG4gICAgICAgIDxsYy10aW1lbGluZS1pdGVtXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG1vdmVtZW50IG9mIGRheS5tb3ZlbWVudFwiXG4gICAgICAgICAgW21vdmltZW50YXRpb25dPVwibW92ZW1lbnRcIlxuICAgICAgICA+PC9sYy10aW1lbGluZS1pdGVtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJDcsOpZGl0b1wiIGNsYXNzPVwiY2VudGVyXCI+IDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJSZXNnYXRlc1wiPiA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRnV0dXJvXCI+PC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgVGltZWxpbmVUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBkYXlzQXNMaW5lSXRlbTogYW55W10gPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnSG9qZScsXG4gICAgICAgIG1vdmVtZW50OiBbXG4gICAgICAgICAgeyBtb3ZlbWVudFR5cGU6ICdjcmVkaXQnLCBtb3ZlbWVudENhdGVnb3J5OiAncHJvZHVjdCcsIG1vdmVtZW50VmFsdWU6IDM5MDAgfSxcbiAgICAgICAgICB7IG1vdmVtZW50VHlwZTogJ2NyZWRpdCcsIG1vdmVtZW50Q2F0ZWdvcnk6ICdxdW90YScsIG1vdmVtZW50VmFsdWU6IDkwMzAwIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnMjYgZGUgT3V0dWJybycsXG4gICAgICAgIG1vdmVtZW50OiBbXG4gICAgICAgICAgeyBtb3ZlbWVudFR5cGU6ICdyZXNjdWUnLCBtb3ZlbWVudENhdGVnb3J5OiAncXVvdGEnLCBtb3ZlbWVudFZhbHVlOiA4OTAwMDAgfSxcbiAgICAgICAgXVxuICAgICAgIH0sXG4gICAgICAge1xuICAgICAgICBsYWJlbDogJzI1IGRlIE91dHVicm8nLFxuICAgICAgICBtb3ZlbWVudDogW1xuICAgICAgICAgIHsgbW92ZW1lbnRUeXBlOiAnY3JlZGl0JywgbW92ZW1lbnRDYXRlZ29yeTogJ3F1b3RhJywgbW92ZW1lbnRWYWx1ZTogNzg1NzYzIH0sXG4gICAgICAgICAgeyBtb3ZlbWVudFR5cGU6ICdjcmVkaXQnLCBtb3ZlbWVudENhdGVnb3J5OiAncHJvZHVjdCcsIG1vdmVtZW50VmFsdWU6IDU0MDA5IH0sXG4gICAgICAgIF1cbiAgICAgICB9LFxuICAgICAgIHtcbiAgICAgICAgbGFiZWw6ICcyNiBkZSBPdXR1YnJvJyxcbiAgICAgICAgbW92ZW1lbnQ6IFtcbiAgICAgICAgICB7IG1vdmVtZW50VHlwZTogJ3Jlc2N1ZScsIG1vdmVtZW50Q2F0ZWdvcnk6ICdwcm9kdWN0JywgbW92ZW1lbnRWYWx1ZTogNzY1NDg5MDAgfSxcbiAgICAgICAgXVxuICAgICAgIH0sXG4gIF07XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=