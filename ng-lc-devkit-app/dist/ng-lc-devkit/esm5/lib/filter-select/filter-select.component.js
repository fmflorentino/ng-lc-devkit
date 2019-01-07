/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
var FilterSelectComponent = /** @class */ (function () {
    function FilterSelectComponent() {
        this.throwFilterSelected = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FilterSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FilterSelectComponent.prototype.filterEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.target.value) {
            this.filterSelected = event.target.value;
            this.throwFilterSelected.emit(this.filterSelected);
        }
    };
    Object.defineProperty(FilterSelectComponent.prototype, "filterText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.filterSelected ? this.filterSelected : 'Filtrar';
        },
        enumerable: true,
        configurable: true
    });
    FilterSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lc-filter-select',
                    template: "<button mat-raised-button [matMenuTriggerFor]=\"menu\">\n  <mat-icon>filter_list</mat-icon> {{ filterText }} <mat-icon>keyboard_arrow_down</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\" [class]=\"'filter-select'\">\n  <button mat-menu-item (click)=\"filterEvent($event)\" [value]=\"'Produtos'\">Produtos</button>\n  <button mat-menu-item (click)=\"filterEvent($event)\" [value]=\"'Cotas'\">Cotas</button>\n  <!-- <button mat-menu-item (click)=\"filterEvent($event)\" [value]=\"'Produtos e Cotas'\">Produtos e Cotas</button> -->\n</mat-menu>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    FilterSelectComponent.ctorParameters = function () { return []; };
    FilterSelectComponent.propDecorators = {
        throwFilterSelected: [{ type: Output }]
    };
    return FilterSelectComponent;
}());
export { FilterSelectComponent };
if (false) {
    /** @type {?} */
    FilterSelectComponent.prototype.throwFilterSelected;
    /** @type {?} */
    FilterSelectComponent.prototype.filterSelected;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1sYy1kZXZraXQvIiwic291cmNlcyI6WyJsaWIvZmlsdGVyLXNlbGVjdC9maWx0ZXItc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQW9CdEU7bUNBSG1ELElBQUksWUFBWSxFQUFFO0tBR3BEOzs7O0lBRWpCLHdDQUFROzs7SUFBUjtLQUNDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxLQUFVO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3BEO0tBQ0Y7SUFFRCxzQkFBSSw2Q0FBVTs7OztRQUFkO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUM5RDs7O09BQUE7O2dCQWhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLG9pQkFRWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7O3NDQUdFLE1BQU07O2dDQWpCVDs7U0FlYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGMtZmlsdGVyLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiPlxuICA8bWF0LWljb24+ZmlsdGVyX2xpc3Q8L21hdC1pY29uPiB7eyBmaWx0ZXJUZXh0IH19IDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19kb3duPC9tYXQtaWNvbj5cbjwvYnV0dG9uPlxuPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiIFtjbGFzc109XCInZmlsdGVyLXNlbGVjdCdcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJmaWx0ZXJFdmVudCgkZXZlbnQpXCIgW3ZhbHVlXT1cIidQcm9kdXRvcydcIj5Qcm9kdXRvczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cImZpbHRlckV2ZW50KCRldmVudClcIiBbdmFsdWVdPVwiJ0NvdGFzJ1wiPkNvdGFzPC9idXR0b24+XG4gIDwhLS0gPGJ1dHRvbiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJmaWx0ZXJFdmVudCgkZXZlbnQpXCIgW3ZhbHVlXT1cIidQcm9kdXRvcyBlIENvdGFzJ1wiPlByb2R1dG9zIGUgQ290YXM8L2J1dHRvbj4gLS0+XG48L21hdC1tZW51PlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpIHRocm93RmlsdGVyU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBmaWx0ZXJTZWxlY3RlZDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBmaWx0ZXJFdmVudChldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSkge1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudGhyb3dGaWx0ZXJTZWxlY3RlZC5lbWl0KHRoaXMuZmlsdGVyU2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBmaWx0ZXJUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbHRlclNlbGVjdGVkID8gdGhpcy5maWx0ZXJTZWxlY3RlZCA6ICdGaWx0cmFyJztcbiAgfVxuXG59XG4iXX0=