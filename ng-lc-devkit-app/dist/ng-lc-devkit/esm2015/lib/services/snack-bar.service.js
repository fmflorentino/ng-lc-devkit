/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
export class SnackBarService {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    /**
     * @param {?} message
     * @param {?=} action
     * @param {?=} duration
     * @return {?}
     */
    openSnackBar(message, action = 'OK', duration = 3000) {
        this.snackBar.open(message, action, {
            duration: duration,
            panelClass: ['mat-snack-bar-container']
        });
    }
}
SnackBarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
SnackBarService.ctorParameters = () => [
    { type: MatSnackBar }
];
/** @nocollapse */ SnackBarService.ngInjectableDef = i0.defineInjectable({ factory: function SnackBarService_Factory() { return new SnackBarService(i0.inject(i1.MatSnackBar)); }, token: SnackBarService, providedIn: "root" });
if (false) {
    /** @type {?} */
    SnackBarService.prototype.snackBar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1sYy1kZXZraXQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc25hY2stYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFLaEQsTUFBTTs7OztJQUVKLFlBQW1CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7S0FBSzs7Ozs7OztJQUV0QyxZQUFZLENBQUMsT0FBZSxFQUFFLFNBQWlCLElBQUksRUFBRSxXQUFtQixJQUFJO1FBQ2pGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUU7WUFDbEMsUUFBUSxFQUFFLFFBQVE7WUFDbEIsVUFBVSxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDeEMsQ0FBQyxDQUFDOzs7O1lBWE4sVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTbmFja0JhclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxuXG4gIHB1YmxpYyBvcGVuU25hY2tCYXIobWVzc2FnZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZyA9ICdPSycsIGR1cmF0aW9uOiBudW1iZXIgPSAzMDAwKSB7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIGFjdGlvbiwge1xuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgcGFuZWxDbGFzczogWydtYXQtc25hY2stYmFyLWNvbnRhaW5lciddXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==