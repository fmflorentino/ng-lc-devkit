/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
var SnackBarService = /** @class */ (function () {
    function SnackBarService(snackBar) {
        this.snackBar = snackBar;
    }
    /**
     * @param {?} message
     * @param {?=} action
     * @param {?=} duration
     * @return {?}
     */
    SnackBarService.prototype.openSnackBar = /**
     * @param {?} message
     * @param {?=} action
     * @param {?=} duration
     * @return {?}
     */
    function (message, action, duration) {
        if (action === void 0) { action = 'OK'; }
        if (duration === void 0) { duration = 3000; }
        this.snackBar.open(message, action, {
            duration: duration,
            panelClass: ['mat-snack-bar-container']
        });
    };
    SnackBarService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    SnackBarService.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
    /** @nocollapse */ SnackBarService.ngInjectableDef = i0.defineInjectable({ factory: function SnackBarService_Factory() { return new SnackBarService(i0.inject(i1.MatSnackBar)); }, token: SnackBarService, providedIn: "root" });
    return SnackBarService;
}());
export { SnackBarService };
if (false) {
    /** @type {?} */
    SnackBarService.prototype.snackBar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1sYy1kZXZraXQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc25hY2stYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0lBTzlDLHlCQUFtQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO0tBQUs7Ozs7Ozs7SUFFdEMsc0NBQVk7Ozs7OztjQUFDLE9BQWUsRUFBRSxNQUFxQixFQUFFLFFBQXVCO1FBQTlDLHVCQUFBLEVBQUEsYUFBcUI7UUFBRSx5QkFBQSxFQUFBLGVBQXVCO1FBQ2pGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUU7WUFDbEMsUUFBUSxFQUFFLFFBQVE7WUFDbEIsVUFBVSxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDeEMsQ0FBQyxDQUFDOzs7Z0JBWE4sVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxXQUFXOzs7MEJBRHBCOztTQU1hLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tCYXJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7IH1cblxuICBwdWJsaWMgb3BlblNuYWNrQmFyKG1lc3NhZ2U6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcgPSAnT0snLCBkdXJhdGlvbjogbnVtYmVyID0gMzAwMCkge1xuICAgIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCBhY3Rpb24sIHtcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIHBhbmVsQ2xhc3M6IFsnbWF0LXNuYWNrLWJhci1jb250YWluZXInXVxuICAgIH0pO1xuICB9XG59XG4iXX0=