/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/common";
export class DialogAlertService {
    /**
     * @param {?} dialog
     * @param {?} _location
     */
    constructor(dialog, _location) {
        this.dialog = dialog;
        this._location = _location;
    }
    /**
     * @param {?} title
     * @param {?} message
     * @return {?}
     */
    openAlertDialog(title, message) {
        /** @type {?} */
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        /** @type {?} */
        let dialogRef;
        dialogRef = this.dialog.open(DialogAlertComponent, dialogConfig);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
    }
    /**
     * @param {?} title
     * @param {?} message
     * @return {?}
     */
    openAlertDialogAction(title, message) {
        /** @type {?} */
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        /** @type {?} */
        let dialogRef;
        dialogRef = this.dialog.open(DialogAlertComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(results => {
            this._location.back();
        });
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
    }
}
DialogAlertService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
DialogAlertService.ctorParameters = () => [
    { type: MatDialog },
    { type: Location }
];
/** @nocollapse */ DialogAlertService.ngInjectableDef = i0.defineInjectable({ factory: function DialogAlertService_Factory() { return new DialogAlertService(i0.inject(i1.MatDialog), i0.inject(i2.Location)); }, token: DialogAlertService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DialogAlertService.prototype.dialog;
    /** @type {?} */
    DialogAlertService.prototype._location;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWFsZXJ0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1sYy1kZXZraXQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZGlhbG9nLWFsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFnQixlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBSzNDLE1BQU07Ozs7O0lBRUosWUFBb0IsTUFBaUIsRUFDM0I7UUFEVSxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQzNCLGNBQVMsR0FBVCxTQUFTO0tBRWxCOzs7Ozs7SUFFTSxlQUFlLENBQUMsS0FBYSxFQUFFLE9BQWU7O1FBQ25ELE1BQU0sWUFBWSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFFM0MsWUFBWSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDakMsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7O1FBRTlCLElBQUksU0FBUyxDQUFxQztRQUNsRCxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFakUsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDMUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Ozs7Ozs7SUFHekMscUJBQXFCLENBQUMsS0FBYSxFQUFFLE9BQWU7O1FBQ3pELE1BQU0sWUFBWSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFFM0MsWUFBWSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDakMsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7O1FBRTlCLElBQUksU0FBUyxDQUFxQztRQUNsRCxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFakUsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3ZCLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOzs7O1lBckNqRCxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFMdUMsU0FBUztZQUN4QyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlhbG9nQWxlcnRDb21wb25lbnQgfSBmcm9tICcuLi9kaWFsb2ctYWxlcnQvZGlhbG9nLWFsZXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1hdERpYWxvZ0NvbmZpZywgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dBbGVydFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgcHJpdmF0ZSBfbG9jYXRpb246IExvY2F0aW9uKSB7XG5cbiAgfVxuXG4gIHB1YmxpYyBvcGVuQWxlcnREaWFsb2codGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZGlhbG9nQ29uZmlnID0gbmV3IE1hdERpYWxvZ0NvbmZpZygpO1xuXG4gICAgZGlhbG9nQ29uZmlnLmRpc2FibGVDbG9zZSA9IHRydWU7XG4gICAgZGlhbG9nQ29uZmlnLmF1dG9Gb2N1cyA9IHRydWU7XG5cbiAgICBsZXQgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGlhbG9nQWxlcnRDb21wb25lbnQ+O1xuICAgIGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQWxlcnRDb21wb25lbnQsIGRpYWxvZ0NvbmZpZyk7XG5cbiAgICBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UudGl0bGUgPSB0aXRsZTtcbiAgICBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIH1cblxuICBwdWJsaWMgb3BlbkFsZXJ0RGlhbG9nQWN0aW9uKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IGRpYWxvZ0NvbmZpZyA9IG5ldyBNYXREaWFsb2dDb25maWcoKTtcblxuICAgIGRpYWxvZ0NvbmZpZy5kaXNhYmxlQ2xvc2UgPSB0cnVlO1xuICAgIGRpYWxvZ0NvbmZpZy5hdXRvRm9jdXMgPSB0cnVlO1xuXG4gICAgbGV0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0FsZXJ0Q29tcG9uZW50PjtcbiAgICBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0FsZXJ0Q29tcG9uZW50LCBkaWFsb2dDb25maWcpO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdHMgPT4ge1xuICAgICAgdGhpcy5fbG9jYXRpb24uYmFjaygpO1xuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLnRpdGxlID0gdGl0bGU7XG4gICAgZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG59XG4iXX0=