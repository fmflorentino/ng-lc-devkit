/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export class DialogAlertComponent {
    /**
     * @param {?} dialogRef
     */
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    close() {
        this.dialogRef.close();
    }
}
DialogAlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'lc-dialog-alert',
                template: `<h2 mat-dialog-title>{{title}}</h2>

<mat-dialog-content>
  <p class="text-center"[innerHTML]="message"></p>
</mat-dialog-content>

<mat-dialog-actions>
  <button mat-raised-button (click)="close()">OK</button>
</mat-dialog-actions>`,
                styles: [``]
            },] },
];
/** @nocollapse */
DialogAlertComponent.ctorParameters = () => [
    { type: MatDialogRef }
];
if (false) {
    /** @type {?} */
    DialogAlertComponent.prototype.title;
    /** @type {?} */
    DialogAlertComponent.prototype.message;
    /** @type {?} */
    DialogAlertComponent.prototype.dialogRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWFsZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWxjLWRldmtpdC8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2ctYWxlcnQvZGlhbG9nLWFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFlakQsTUFBTTs7OztJQUtKLFlBQW9CLFNBQTZDO1FBQTdDLGNBQVMsR0FBVCxTQUFTLENBQW9DO0tBQUs7Ozs7SUFFdEUsUUFBUTtLQUNQOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDeEI7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7OztzQkFRVTtnQkFDcEIsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7WUFkUSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGMtZGlhbG9nLWFsZXJ0JyxcbiAgdGVtcGxhdGU6IGA8aDIgbWF0LWRpYWxvZy10aXRsZT57e3RpdGxlfX08L2gyPlxuXG48bWF0LWRpYWxvZy1jb250ZW50PlxuICA8cCBjbGFzcz1cInRleHQtY2VudGVyXCJbaW5uZXJIVE1MXT1cIm1lc3NhZ2VcIj48L3A+XG48L21hdC1kaWFsb2ctY29udGVudD5cblxuPG1hdC1kaWFsb2ctYWN0aW9ucz5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoKVwiPk9LPC9idXR0b24+XG48L21hdC1kaWFsb2ctYWN0aW9ucz5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyB0aXRsZTtcbiAgcHVibGljIG1lc3NhZ2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEaWFsb2dBbGVydENvbXBvbmVudD4pIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG4iXX0=