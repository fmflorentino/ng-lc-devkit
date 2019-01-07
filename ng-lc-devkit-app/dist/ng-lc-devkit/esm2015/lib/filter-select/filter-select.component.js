/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
export class FilterSelectComponent {
    constructor() {
        this.throwFilterSelected = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    filterEvent(event) {
        if (event.target.value) {
            this.filterSelected = event.target.value;
            this.throwFilterSelected.emit(this.filterSelected);
        }
    }
    /**
     * @return {?}
     */
    get filterText() {
        return this.filterSelected ? this.filterSelected : 'Filtrar';
    }
}
FilterSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'lc-filter-select',
                template: `<button mat-raised-button [matMenuTriggerFor]="menu">
  <mat-icon>filter_list</mat-icon> {{ filterText }} <mat-icon>keyboard_arrow_down</mat-icon>
</button>
<mat-menu #menu="matMenu" [class]="'filter-select'">
  <button mat-menu-item (click)="filterEvent($event)" [value]="'Produtos'">Produtos</button>
  <button mat-menu-item (click)="filterEvent($event)" [value]="'Cotas'">Cotas</button>
  <!-- <button mat-menu-item (click)="filterEvent($event)" [value]="'Produtos e Cotas'">Produtos e Cotas</button> -->
</mat-menu>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
FilterSelectComponent.ctorParameters = () => [];
FilterSelectComponent.propDecorators = {
    throwFilterSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FilterSelectComponent.prototype.throwFilterSelected;
    /** @type {?} */
    FilterSelectComponent.prototype.filterSelected;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1sYy1kZXZraXQvIiwic291cmNlcyI6WyJsaWIvZmlsdGVyLXNlbGVjdC9maWx0ZXItc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZXhFLE1BQU07SUFLSjttQ0FIbUQsSUFBSSxZQUFZLEVBQUU7S0FHcEQ7Ozs7SUFFakIsUUFBUTtLQUNQOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFVO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3BEO0tBQ0Y7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0tBQzlEOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Q0FRWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7Ozs7a0NBR0UsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYy1maWx0ZXItc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCI+XG4gIDxtYXQtaWNvbj5maWx0ZXJfbGlzdDwvbWF0LWljb24+IHt7IGZpbHRlclRleHQgfX0gPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X2Rvd248L21hdC1pY29uPlxuPC9idXR0b24+XG48bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCIgW2NsYXNzXT1cIidmaWx0ZXItc2VsZWN0J1wiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cImZpbHRlckV2ZW50KCRldmVudClcIiBbdmFsdWVdPVwiJ1Byb2R1dG9zJ1wiPlByb2R1dG9zPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwiZmlsdGVyRXZlbnQoJGV2ZW50KVwiIFt2YWx1ZV09XCInQ290YXMnXCI+Q290YXM8L2J1dHRvbj5cbiAgPCEtLSA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cImZpbHRlckV2ZW50KCRldmVudClcIiBbdmFsdWVdPVwiJ1Byb2R1dG9zIGUgQ290YXMnXCI+UHJvZHV0b3MgZSBDb3RhczwvYnV0dG9uPiAtLT5cbjwvbWF0LW1lbnU+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAT3V0cHV0KCkgdGhyb3dGaWx0ZXJTZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGZpbHRlclNlbGVjdGVkOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGZpbHRlckV2ZW50KGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlKSB7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy50aHJvd0ZpbHRlclNlbGVjdGVkLmVtaXQodGhpcy5maWx0ZXJTZWxlY3RlZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGZpbHRlclRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyU2VsZWN0ZWQgPyB0aGlzLmZpbHRlclNlbGVjdGVkIDogJ0ZpbHRyYXInO1xuICB9XG5cbn1cbiJdfQ==