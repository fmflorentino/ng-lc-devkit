/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
var DialogAlertComponent = /** @class */ (function () {
    function DialogAlertComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    /**
     * @return {?}
     */
    DialogAlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    DialogAlertComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    DialogAlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lc-dialog-alert',
                    template: "<h2 mat-dialog-title>{{title}}</h2>\n\n<mat-dialog-content>\n  <p class=\"text-center\"[innerHTML]=\"message\"></p>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button (click)=\"close()\">OK</button>\n</mat-dialog-actions>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    DialogAlertComponent.ctorParameters = function () { return [
        { type: MatDialogRef }
    ]; };
    return DialogAlertComponent;
}());
export { DialogAlertComponent };
if (false) {
    /** @type {?} */
    DialogAlertComponent.prototype.title;
    /** @type {?} */
    DialogAlertComponent.prototype.message;
    /** @type {?} */
    DialogAlertComponent.prototype.dialogRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWFsZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWxjLWRldmtpdC8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2ctYWxlcnQvZGlhbG9nLWFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0lBb0IvQyw4QkFBb0IsU0FBNkM7UUFBN0MsY0FBUyxHQUFULFNBQVMsQ0FBb0M7S0FBSzs7OztJQUV0RSx1Q0FBUTs7O0lBQVI7S0FDQzs7OztJQUVELG9DQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDeEI7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLHdQQVFVO29CQUNwQixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7Z0JBZFEsWUFBWTs7K0JBRHJCOztTQWdCYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYy1kaWFsb2ctYWxlcnQnLFxuICB0ZW1wbGF0ZTogYDxoMiBtYXQtZGlhbG9nLXRpdGxlPnt7dGl0bGV9fTwvaDI+XG5cbjxtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gIDxwIGNsYXNzPVwidGV4dC1jZW50ZXJcIltpbm5lckhUTUxdPVwibWVzc2FnZVwiPjwvcD5cbjwvbWF0LWRpYWxvZy1jb250ZW50PlxuXG48bWF0LWRpYWxvZy1hY3Rpb25zPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCI+T0s8L2J1dHRvbj5cbjwvbWF0LWRpYWxvZy1hY3Rpb25zPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHRpdGxlO1xuICBwdWJsaWMgbWVzc2FnZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0FsZXJ0Q29tcG9uZW50PikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn1cbiJdfQ==