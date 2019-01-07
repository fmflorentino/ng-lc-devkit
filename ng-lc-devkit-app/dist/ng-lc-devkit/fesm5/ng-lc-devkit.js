import { Injectable, Component, NgModule, Input, EventEmitter, Output, defineInjectable, inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MatDialogConfig, MatDialog, MatProgressBarModule, MatButtonModule, MatTabsModule, MatChipsModule, MatDatepickerModule, MatMenuModule, MatIconModule, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { MatSnackBar as MatSnackBar$1 } from '@angular/material/snack-bar';
import { Location, CommonModule } from '@angular/common';
import { MatDialog as MatDialog$1 } from '@angular/material/dialog';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgLcDevkitService = /** @class */ (function () {
    function NgLcDevkitService() {
    }
    NgLcDevkitService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NgLcDevkitService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgLcDevkitService.ngInjectableDef = defineInjectable({ factory: function NgLcDevkitService_Factory() { return new NgLcDevkitService(); }, token: NgLcDevkitService, providedIn: "root" });
    return NgLcDevkitService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgLcDevkitComponent = /** @class */ (function () {
    function NgLcDevkitComponent() {
    }
    /**
     * @return {?}
     */
    NgLcDevkitComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgLcDevkitComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lc-ng-lc-devkit',
                    template: "\n    <p>\n      ng-lc-devkit works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    NgLcDevkitComponent.ctorParameters = function () { return []; };
    return NgLcDevkitComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.quota = 'quota';
        this.product = 'product';
    }
    /**
     * @return {?}
     */
    ProgressBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(ProgressBarComponent.prototype, "progressType", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._progressType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "progressValueOne", {
        get: /**
         * @return {?}
         */
        function () {
            return this._progressValueOne;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._progressValueOne = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "iconTop", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._progressIcon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "progressValueTwo", {
        get: /**
         * @return {?}
         */
        function () {
            return this._progressValueTwo;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._progressValueTwo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "typeName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._progressType === 'quota' ? 'Cotas' : 'Produtos';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "getFirstBottomLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._progressType === 'quota' ? 'Valor Resgatado' : 'Presenteados';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "getSecondBottomLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._progressType === 'quota' ? 'Valor Presenteado' : 'Adicionados';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "progressIconImage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._progressIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "progressIconSrc", {
        get: /**
         * @return {?}
         */
        function () {
            return this._progressType === 'quota' ? 'assets/images/ico-plane-black.svg' : 'assets/images/ico-product.svg';
        },
        enumerable: true,
        configurable: true
    });
    ProgressBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lc-progress-bar',
                    template: "<div>\n  <div class=\"icon\" *ngIf=\"progressIconImage\">\n    <figure>\n      <img [src]=\"progressIconSrc\" alt=\"\">\n    </figure>\n    <p>\n      {{ typeName }}\n    </p>\n  </div>\n  <div class=\"texts\">\n    <span *ngIf=\"_progressType !== quota\" [ngClass]=\"\n      {\n      'green' : _progressType === product,\n      'pink' : _progressType === quota\n      }\">{{\n      progressValueOne }}</span>\n    <span *ngIf=\"_progressType !== quota\">{{ progressValueTwo }}</span>\n\n    <span *ngIf=\"_progressType === quota\" [ngClass]=\"\n      {\n      'green' : _progressType === product,\n      'pink' : _progressType === quota\n      }\">{{\n      progressValueOne | currency:'BRL' }}\n    </span>\n    <span *ngIf=\"_progressType === 'quota'\">{{ progressValueTwo | currency:'BRL' }}\n    </span>\n  </div>\n  <mat-progress-bar mode=\"determinate\" value=\"40\" [ngClass]=\"\n    {\n    'green' : _progressType === product,\n    'pink' : _progressType === quota\n    }\"></mat-progress-bar>\n  <div class=\"texts\">\n    <span class=\"bottom\" [ngClass]=\"\n      {\n      'green' : _progressType === product,\n      'quota' : _progressType === quota\n      }\">{{\n      getFirstBottomLabel }}</span>\n    <span class=\"bottom\">{{ getSecondBottomLabel }}</span>\n  </div>\n</div>\n\n\n<div class=\"second-progress-bar\">\n  <div class=\"texts\">\n    <span *ngIf=\"_progressType !== quota\" class=\"blue\">{{\n      progressValueOne }}</span>\n    <span *ngIf=\"_progressType !== quota\">{{ progressValueTwo }}</span>\n\n    <span *ngIf=\"_progressType === quota\" class=\"blue\">{{\n      progressValueOne | currency:'BRL' }}\n    </span>\n    <span *ngIf=\"_progressType === quota\">{{ progressValueTwo | currency:'BRL' }}\n    </span>\n  </div>\n  <mat-progress-bar mode=\"determinate\" value=\"40\" class=\"blue\"></mat-progress-bar>\n  <div class=\"texts\">\n    <span class=\"bottom blue\">{{\n      getFirstBottomLabel }}</span>\n    <span class=\"bottom\">{{ getSecondBottomLabel }}</span>\n  </div>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    ProgressBarComponent.ctorParameters = function () { return []; };
    ProgressBarComponent.propDecorators = {
        progressType: [{ type: Input }],
        progressValueOne: [{ type: Input }],
        iconTop: [{ type: Input }],
        progressValueTwo: [{ type: Input }]
    };
    return ProgressBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TimelineItemDetailComponent = /** @class */ (function () {
    function TimelineItemDetailComponent() {
    }
    /**
     * @return {?}
     */
    TimelineItemDetailComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TimelineItemDetailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lc-timeline-item-detail',
                    template: "<div class=\"row\">\n  <div class=\"col-auto\">\n    <div class=\"img-item\"></div>\n  </div>\n  <div class=\"col infos-item\">\n    <p>\n        Kitchenaid Batedeira Planet\u00E1ria 6 vel. prata 110v - SKL9999999999\n    </p>\n    <span>\n        Convidado: Ana Lu\u00EDza Souto\n    </span>\n    <button mat-raised-button>Presentear um casal</button>\n  </div>\n</div>",
                },] },
    ];
    /** @nocollapse */
    TimelineItemDetailComponent.ctorParameters = function () { return []; };
    return TimelineItemDetailComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ SnackBarService.ngInjectableDef = defineInjectable({ factory: function SnackBarService_Factory() { return new SnackBarService(inject(MatSnackBar$1)); }, token: SnackBarService, providedIn: "root" });
    return SnackBarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DialogAlertService = /** @class */ (function () {
    function DialogAlertService(dialog, _location) {
        this.dialog = dialog;
        this._location = _location;
    }
    /**
     * @param {?} title
     * @param {?} message
     * @return {?}
     */
    DialogAlertService.prototype.openAlertDialog = /**
     * @param {?} title
     * @param {?} message
     * @return {?}
     */
    function (title, message) {
        /** @type {?} */
        var dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        /** @type {?} */
        var dialogRef;
        dialogRef = this.dialog.open(DialogAlertComponent, dialogConfig);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
    };
    /**
     * @param {?} title
     * @param {?} message
     * @return {?}
     */
    DialogAlertService.prototype.openAlertDialogAction = /**
     * @param {?} title
     * @param {?} message
     * @return {?}
     */
    function (title, message) {
        var _this = this;
        /** @type {?} */
        var dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        /** @type {?} */
        var dialogRef;
        dialogRef = this.dialog.open(DialogAlertComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(function (results) {
            _this._location.back();
        });
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
    };
    DialogAlertService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    DialogAlertService.ctorParameters = function () { return [
        { type: MatDialog },
        { type: Location }
    ]; };
    /** @nocollapse */ DialogAlertService.ngInjectableDef = defineInjectable({ factory: function DialogAlertService_Factory() { return new DialogAlertService(inject(MatDialog$1), inject(Location)); }, token: DialogAlertService, providedIn: "root" });
    return DialogAlertService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgLcDevkitModule = /** @class */ (function () {
    function NgLcDevkitModule() {
    }
    NgLcDevkitModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatProgressBarModule,
                        MatButtonModule,
                        MatTabsModule,
                        MatChipsModule,
                        MatDatepickerModule,
                        MatMenuModule,
                        MatIconModule,
                        MatSnackBarModule,
                        MatDialogModule
                    ],
                    declarations: [
                        NgLcDevkitComponent,
                        ProgressBarComponent,
                        TimelineItemDetailComponent,
                        TimelineItemComponent,
                        TimelineTabsComponent,
                        DatepickerComponent,
                        FilterSelectComponent,
                        DialogAlertComponent
                    ],
                    exports: [
                        NgLcDevkitComponent,
                        ProgressBarComponent,
                        TimelineItemDetailComponent,
                        TimelineItemComponent,
                        TimelineTabsComponent,
                        DatepickerComponent,
                        FilterSelectComponent,
                        DialogAlertComponent
                    ],
                    providers: [SnackBarService, DialogAlertService],
                    entryComponents: [DialogAlertComponent]
                },] },
    ];
    return NgLcDevkitModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgLcDevkitService, NgLcDevkitComponent, NgLcDevkitModule, ProgressBarComponent, TimelineTabsComponent, TimelineItemComponent, TimelineItemDetailComponent, DatepickerComponent, FilterSelectComponent, SnackBarService, DialogAlertService, DialogAlertComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbGMtZGV2a2l0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1sYy1kZXZraXQvbGliL25nLWxjLWRldmtpdC5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1sYy1kZXZraXQvbGliL25nLWxjLWRldmtpdC5jb21wb25lbnQudHMiLCJuZzovL25nLWxjLWRldmtpdC9saWIvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQudHMiLCJuZzovL25nLWxjLWRldmtpdC9saWIvdGltZWxpbmUtaXRlbS1kZXRhaWwvdGltZWxpbmUtaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1sYy1kZXZraXQvbGliL3RpbWVsaW5lLWl0ZW0vdGltZWxpbmUtaXRlbS5jb21wb25lbnQudHMiLCJuZzovL25nLWxjLWRldmtpdC9saWIvdGltZWxpbmUtdGFicy90aW1lbGluZS10YWJzLmNvbXBvbmVudC50cyIsIm5nOi8vbmctbGMtZGV2a2l0L2xpYi9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1sYy1kZXZraXQvbGliL2ZpbHRlci1zZWxlY3QvZmlsdGVyLXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL25nLWxjLWRldmtpdC9saWIvc2VydmljZXMvc25hY2stYmFyLnNlcnZpY2UudHMiLCJuZzovL25nLWxjLWRldmtpdC9saWIvZGlhbG9nLWFsZXJ0L2RpYWxvZy1hbGVydC5jb21wb25lbnQudHMiLCJuZzovL25nLWxjLWRldmtpdC9saWIvc2VydmljZXMvZGlhbG9nLWFsZXJ0LnNlcnZpY2UudHMiLCJuZzovL25nLWxjLWRldmtpdC9saWIvbmctbGMtZGV2a2l0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nTGNEZXZraXRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGMtbmctbGMtZGV2a2l0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG5nLWxjLWRldmtpdCB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdMY0RldmtpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGMtcHJvZ3Jlc3MtYmFyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2PlxuICA8ZGl2IGNsYXNzPVwiaWNvblwiICpuZ0lmPVwicHJvZ3Jlc3NJY29uSW1hZ2VcIj5cbiAgICA8ZmlndXJlPlxuICAgICAgPGltZyBbc3JjXT1cInByb2dyZXNzSWNvblNyY1wiIGFsdD1cIlwiPlxuICAgIDwvZmlndXJlPlxuICAgIDxwPlxuICAgICAge3sgdHlwZU5hbWUgfX1cbiAgICA8L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidGV4dHNcIj5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgIT09IHF1b3RhXCIgW25nQ2xhc3NdPVwiXG4gICAgICB7XG4gICAgICAnZ3JlZW4nIDogX3Byb2dyZXNzVHlwZSA9PT0gcHJvZHVjdCxcbiAgICAgICdwaW5rJyA6IF9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXG4gICAgICB9XCI+e3tcbiAgICAgIHByb2dyZXNzVmFsdWVPbmUgfX08L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJfcHJvZ3Jlc3NUeXBlICE9PSBxdW90YVwiPnt7IHByb2dyZXNzVmFsdWVUd28gfX08L3NwYW4+XG5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXCIgW25nQ2xhc3NdPVwiXG4gICAgICB7XG4gICAgICAnZ3JlZW4nIDogX3Byb2dyZXNzVHlwZSA9PT0gcHJvZHVjdCxcbiAgICAgICdwaW5rJyA6IF9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXG4gICAgICB9XCI+e3tcbiAgICAgIHByb2dyZXNzVmFsdWVPbmUgfCBjdXJyZW5jeTonQlJMJyB9fVxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgPT09ICdxdW90YSdcIj57eyBwcm9ncmVzc1ZhbHVlVHdvIHwgY3VycmVuY3k6J0JSTCcgfX1cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuICA8bWF0LXByb2dyZXNzLWJhciBtb2RlPVwiZGV0ZXJtaW5hdGVcIiB2YWx1ZT1cIjQwXCIgW25nQ2xhc3NdPVwiXG4gICAge1xuICAgICdncmVlbicgOiBfcHJvZ3Jlc3NUeXBlID09PSBwcm9kdWN0LFxuICAgICdwaW5rJyA6IF9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXG4gICAgfVwiPjwvbWF0LXByb2dyZXNzLWJhcj5cbiAgPGRpdiBjbGFzcz1cInRleHRzXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJib3R0b21cIiBbbmdDbGFzc109XCJcbiAgICAgIHtcbiAgICAgICdncmVlbicgOiBfcHJvZ3Jlc3NUeXBlID09PSBwcm9kdWN0LFxuICAgICAgJ3F1b3RhJyA6IF9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXG4gICAgICB9XCI+e3tcbiAgICAgIGdldEZpcnN0Qm90dG9tTGFiZWwgfX08L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJib3R0b21cIj57eyBnZXRTZWNvbmRCb3R0b21MYWJlbCB9fTwvc3Bhbj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuXG48ZGl2IGNsYXNzPVwic2Vjb25kLXByb2dyZXNzLWJhclwiPlxuICA8ZGl2IGNsYXNzPVwidGV4dHNcIj5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgIT09IHF1b3RhXCIgY2xhc3M9XCJibHVlXCI+e3tcbiAgICAgIHByb2dyZXNzVmFsdWVPbmUgfX08L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJfcHJvZ3Jlc3NUeXBlICE9PSBxdW90YVwiPnt7IHByb2dyZXNzVmFsdWVUd28gfX08L3NwYW4+XG5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXCIgY2xhc3M9XCJibHVlXCI+e3tcbiAgICAgIHByb2dyZXNzVmFsdWVPbmUgfCBjdXJyZW5jeTonQlJMJyB9fVxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXCI+e3sgcHJvZ3Jlc3NWYWx1ZVR3byB8IGN1cnJlbmN5OidCUkwnIH19XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgPG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImRldGVybWluYXRlXCIgdmFsdWU9XCI0MFwiIGNsYXNzPVwiYmx1ZVwiPjwvbWF0LXByb2dyZXNzLWJhcj5cbiAgPGRpdiBjbGFzcz1cInRleHRzXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJib3R0b20gYmx1ZVwiPnt7XG4gICAgICBnZXRGaXJzdEJvdHRvbUxhYmVsIH19PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiYm90dG9tXCI+e3sgZ2V0U2Vjb25kQm90dG9tTGFiZWwgfX08L3NwYW4+XG4gIDwvZGl2PlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgX3Byb2dyZXNzVHlwZTogc3RyaW5nO1xuICBfcHJvZ3Jlc3NWYWx1ZU9uZTogbnVtYmVyO1xuICBfcHJvZ3Jlc3NWYWx1ZVR3bzogbnVtYmVyO1xuICBfcHJvZ3Jlc3NJY29uOiBib29sZWFuO1xuXG4gIHF1b3RhID0gJ3F1b3RhJztcbiAgcHJvZHVjdCA9ICdwcm9kdWN0JztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHByb2dyZXNzVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvZ3Jlc3NUeXBlID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgcHJvZ3Jlc3NWYWx1ZU9uZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcHJvZ3Jlc3NWYWx1ZU9uZSA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGljb25Ub3AodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9wcm9ncmVzc0ljb24gPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBwcm9ncmVzc1ZhbHVlVHdvKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wcm9ncmVzc1ZhbHVlVHdvID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdHlwZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzVHlwZSA9PT0gJ3F1b3RhJyA/ICdDb3RhcycgOiAnUHJvZHV0b3MnO1xuICB9XG5cbiAgZ2V0IGdldEZpcnN0Qm90dG9tTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzVHlwZSA9PT0gJ3F1b3RhJyA/ICdWYWxvciBSZXNnYXRhZG8nIDogJ1ByZXNlbnRlYWRvcyc7XG4gIH1cblxuICBnZXQgZ2V0U2Vjb25kQm90dG9tTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzVHlwZSA9PT0gJ3F1b3RhJyA/ICdWYWxvciBQcmVzZW50ZWFkbycgOiAnQWRpY2lvbmFkb3MnO1xuICB9XG5cbiAgZ2V0IHByb2dyZXNzVmFsdWVPbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzVmFsdWVPbmU7XG4gIH1cblxuICBnZXQgcHJvZ3Jlc3NWYWx1ZVR3bygpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NWYWx1ZVR3bztcbiAgfVxuXG4gIGdldCBwcm9ncmVzc0ljb25JbWFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NJY29uO1xuICB9XG5cbiAgZ2V0IHByb2dyZXNzSWNvblNyYygpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NUeXBlID09PSAncXVvdGEnID8gJ2Fzc2V0cy9pbWFnZXMvaWNvLXBsYW5lLWJsYWNrLnN2ZycgOiAnYXNzZXRzL2ltYWdlcy9pY28tcHJvZHVjdC5zdmcnXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGMtdGltZWxpbmUtaXRlbS1kZXRhaWwnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC1hdXRvXCI+XG4gICAgPGRpdiBjbGFzcz1cImltZy1pdGVtXCI+PC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sIGluZm9zLWl0ZW1cIj5cbiAgICA8cD5cbiAgICAgICAgS2l0Y2hlbmFpZCBCYXRlZGVpcmEgUGxhbmV0w4PCoXJpYSA2IHZlbC4gcHJhdGEgMTEwdiAtIFNLTDk5OTk5OTk5OTlcbiAgICA8L3A+XG4gICAgPHNwYW4+XG4gICAgICAgIENvbnZpZGFkbzogQW5hIEx1w4PCrXphIFNvdXRvXG4gICAgPC9zcGFuPlxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24+UHJlc2VudGVhciB1bSBjYXNhbDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PmAsXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lSXRlbURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IHNsaWRlU3RhdGVUcmlnZ2VyLCBtYXJrZWRUcmlnZ2VyIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xjLXRpbWVsaW5lLWl0ZW0nLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImJ1dHRvbi1hY3Rpb24gY29sLWF1dG9cIj5cbiAgICA8YnV0dG9uXG4gICAgICBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgY2xhc3M9XCJmYWItbW9yZVwiXG4gICAgICBbbmdDbGFzc109XCJcbiAgICAgICAgeyAncmVzY3VlJzogbW92aW1lbnRhdGlvblR5cGUgPT09ICdyZXNjdWUnIH1cbiAgICAgIFwiXG4gICAgICAoY2xpY2spPVwiYWN0aW9uU2hvd0l0ZW1EZXRhaWwoKVwiXG4gICAgICA+XG4gICAgICA8c3Bhbj4ge3sgbW92aW1lbnRhdGlvblR5cGUgPT09ICdyZXNjdWUnID8gJy0nIDogJysnIH19IDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInRleHQtY29udGVudCBjb2wtYXV0b1wiIChjbGljayk9XCJhY3Rpb25TaG93SXRlbURldGFpbCgpXCI+XG4gICAgPHAgW25nQ2xhc3NdPVwieyAncmVzY3VlJzogbW92aW1lbnRhdGlvblR5cGUgPT09ICdyZXNjdWUnIH1cIj57eyBnZXRNb3ZpbWVudGF0aW9uTmFtZSB9fTwvcD5cbiAgICA8c3Bhbj5cbiAgICAgIEtpdGNoZW5haWQgQmF0ZWRlaXJhIFBsYW5ldMODwqFyaWEgNiB2ZWxvY2lkYWRlc1xuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIHZhbHVlXCI+XG4gICAgPHNwYW4gW25nQ2xhc3NdPVwieyAncmVzY3VlJzogbW92aW1lbnRhdGlvblR5cGUgPT09ICdyZXNjdWUnIH1cIj5cbiAgICAgIHt7IG1vdmltZW50YXRpb25UeXBlID09PSAncmVzY3VlJyA/ICctJyAgOiAnKyd9fSB7eyBnZXRNb3ZpbWVudGF0aW9uVmFsdWUgfCBjdXJyZW5jeTonQlJMJyB9fVxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC0xMlwiIHN0eWxlPVwib3ZlcmZsb3c6IGhpZGRlbjtcIiAqbmdJZj1cInNob3dJdGVtRGV0YWlsXCI+XG4gICAgPGxjLXRpbWVsaW5lLWl0ZW0tZGV0YWlsICpuZ0lmPVwic2hvd0l0ZW1EZXRhaWxcIj48L2xjLXRpbWVsaW5lLWl0ZW0tZGV0YWlsPlxuICA8L2Rpdj5cblxuICA8IS0tIDxkaXYgY2xhc3M9XCJjb2wtMTJcIiBzdHlsZT1cIm92ZXJmbG93OiBoaWRkZW47XCIgQHNsaWRlU3RhdGUgKm5nSWY9XCJzaG93SXRlbURldGFpbFwiPlxuICAgIDxhcHAtdGltZWxpbmUtaXRlbS1kZXRhaWwgQHNsaWRlU3RhdGUgKm5nSWY9XCJzaG93SXRlbURldGFpbFwiPjwvYXBwLXRpbWVsaW5lLWl0ZW0tZGV0YWlsPlxuICA8L2Rpdj4gLS0+XG5cbjwvZGl2PlxuYCxcbiAgLy8gYW5pbWF0aW9uczogWyBzbGlkZVN0YXRlVHJpZ2dlciwgbWFya2VkVHJpZ2dlciBdXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIF9tb3ZpbWVudGF0aW9uSXRlbTogYW55O1xuICBzaG93SXRlbURldGFpbDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNob3dJdGVtRGV0YWlsID0gZmFsc2U7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBtb3ZpbWVudGF0aW9uKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG1vdmltZW50YXRpb25UeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vdmltZW50YXRpb25JdGVtLm1vdmVtZW50VHlwZTtcbiAgfVxuXG4gIGdldCBnZXRNb3ZpbWVudGF0aW9uTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldE1vdmltZW50YXRpb25OYW1lVmFsaWRhdGlvbigpO1xuICB9XG5cbiAgZ2V0IGdldE1vdmltZW50YXRpb25WYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbS5tb3ZlbWVudFZhbHVlO1xuICB9XG5cbiAgZ2V0TW92aW1lbnRhdGlvbk5hbWVWYWxpZGF0aW9uKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX21vdmltZW50YXRpb25JdGVtLm1vdmVtZW50VHlwZSA9PT0gJ3Jlc2N1ZScgJiYgdGhpcy5fbW92aW1lbnRhdGlvbkl0ZW0ubW92ZW1lbnRDYXRlZ29yeSA9PT0gJ3Byb2R1Y3QnKSB7XG4gICAgICByZXR1cm4gJ1Jlc2dhdGUgZGUgUHJvZHV0byc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbS5tb3ZlbWVudFR5cGUgPT09ICdjcmVkaXQnICYmIHRoaXMuX21vdmltZW50YXRpb25JdGVtLm1vdmVtZW50Q2F0ZWdvcnkgPT09ICdwcm9kdWN0Jykge1xuICAgICAgcmV0dXJuICdDcsODwqlkaXRvIGRlIFByb2R1dG8nO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fbW92aW1lbnRhdGlvbkl0ZW0ubW92ZW1lbnRUeXBlID09PSAnY3JlZGl0JyAmJiB0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbS5tb3ZlbWVudENhdGVnb3J5ID09PSAncXVvdGEnKSB7XG4gICAgICByZXR1cm4gJ0Nyw4PCqWRpdG8gZGUgQ290YSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbS5tb3ZlbWVudFR5cGUgPT09ICdyZXNjdWUnICYmIHRoaXMuX21vdmltZW50YXRpb25JdGVtLm1vdmVtZW50Q2F0ZWdvcnkgPT09ICdxdW90YScpIHtcbiAgICAgIHJldHVybiAnUmVzZ2F0ZSBkZSBDb3RhJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdudWxvJztcbiAgICB9XG4gIH1cblxuICBhY3Rpb25TaG93SXRlbURldGFpbCgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dJdGVtRGV0YWlsID0gIXRoaXMuc2hvd0l0ZW1EZXRhaWw7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xjLXRpbWVsaW5lLXRhYnMnLFxuICB0ZW1wbGF0ZTogYDxtYXQtdGFiLWdyb3VwPlxuICA8bWF0LXRhYiBsYWJlbD1cIlR1ZG9cIj5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBkYXkgb2YgZGF5c0FzTGluZUl0ZW1cIj5cbiAgICAgIDxtYXQtY2hpcC1saXN0PlxuICAgICAgICA8bWF0LWNoaXA+e3sgZGF5LmxhYmVsIH19PC9tYXQtY2hpcD5cbiAgICAgIDwvbWF0LWNoaXAtbGlzdD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1saW5lXCI+XG4gICAgICAgIDxsYy10aW1lbGluZS1pdGVtXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG1vdmVtZW50IG9mIGRheS5tb3ZlbWVudFwiXG4gICAgICAgICAgW21vdmltZW50YXRpb25dPVwibW92ZW1lbnRcIlxuICAgICAgICA+PC9sYy10aW1lbGluZS1pdGVtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJDcsODwqlkaXRvXCIgY2xhc3M9XCJjZW50ZXJcIj4gPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlJlc2dhdGVzXCI+IDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJGdXR1cm9cIj48L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lbGluZVRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGRheXNBc0xpbmVJdGVtOiBhbnlbXSA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdIb2plJyxcbiAgICAgICAgbW92ZW1lbnQ6IFtcbiAgICAgICAgICB7IG1vdmVtZW50VHlwZTogJ2NyZWRpdCcsIG1vdmVtZW50Q2F0ZWdvcnk6ICdwcm9kdWN0JywgbW92ZW1lbnRWYWx1ZTogMzkwMCB9LFxuICAgICAgICAgIHsgbW92ZW1lbnRUeXBlOiAnY3JlZGl0JywgbW92ZW1lbnRDYXRlZ29yeTogJ3F1b3RhJywgbW92ZW1lbnRWYWx1ZTogOTAzMDAgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICcyNiBkZSBPdXR1YnJvJyxcbiAgICAgICAgbW92ZW1lbnQ6IFtcbiAgICAgICAgICB7IG1vdmVtZW50VHlwZTogJ3Jlc2N1ZScsIG1vdmVtZW50Q2F0ZWdvcnk6ICdxdW90YScsIG1vdmVtZW50VmFsdWU6IDg5MDAwMCB9LFxuICAgICAgICBdXG4gICAgICAgfSxcbiAgICAgICB7XG4gICAgICAgIGxhYmVsOiAnMjUgZGUgT3V0dWJybycsXG4gICAgICAgIG1vdmVtZW50OiBbXG4gICAgICAgICAgeyBtb3ZlbWVudFR5cGU6ICdjcmVkaXQnLCBtb3ZlbWVudENhdGVnb3J5OiAncXVvdGEnLCBtb3ZlbWVudFZhbHVlOiA3ODU3NjMgfSxcbiAgICAgICAgICB7IG1vdmVtZW50VHlwZTogJ2NyZWRpdCcsIG1vdmVtZW50Q2F0ZWdvcnk6ICdwcm9kdWN0JywgbW92ZW1lbnRWYWx1ZTogNTQwMDkgfSxcbiAgICAgICAgXVxuICAgICAgIH0sXG4gICAgICAge1xuICAgICAgICBsYWJlbDogJzI2IGRlIE91dHVicm8nLFxuICAgICAgICBtb3ZlbWVudDogW1xuICAgICAgICAgIHsgbW92ZW1lbnRUeXBlOiAncmVzY3VlJywgbW92ZW1lbnRDYXRlZ29yeTogJ3Byb2R1Y3QnLCBtb3ZlbWVudFZhbHVlOiA3NjU0ODkwMCB9LFxuICAgICAgICBdXG4gICAgICAgfSxcbiAgXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYy1kYXRlcGlja2VyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IChjbGljayk9XCJwaWNrZXIub3BlbigpXCI+XG4gIDxsYWJlbD57eyBsYWJlbFRleHRWaWV3IH19PC9sYWJlbD5cbiAgPGlucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiPlxuICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlciBpZD1cImRhdGVQaWNrZXJcIj48L21hdC1kYXRlcGlja2VyPlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgX2xhYmVsVGV4dDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBsYWJlbFRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhYmVsVGV4dCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGxhYmVsVGV4dFZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsVGV4dDtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGMtZmlsdGVyLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiPlxuICA8bWF0LWljb24+ZmlsdGVyX2xpc3Q8L21hdC1pY29uPiB7eyBmaWx0ZXJUZXh0IH19IDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19kb3duPC9tYXQtaWNvbj5cbjwvYnV0dG9uPlxuPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiIFtjbGFzc109XCInZmlsdGVyLXNlbGVjdCdcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJmaWx0ZXJFdmVudCgkZXZlbnQpXCIgW3ZhbHVlXT1cIidQcm9kdXRvcydcIj5Qcm9kdXRvczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cImZpbHRlckV2ZW50KCRldmVudClcIiBbdmFsdWVdPVwiJ0NvdGFzJ1wiPkNvdGFzPC9idXR0b24+XG4gIDwhLS0gPGJ1dHRvbiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJmaWx0ZXJFdmVudCgkZXZlbnQpXCIgW3ZhbHVlXT1cIidQcm9kdXRvcyBlIENvdGFzJ1wiPlByb2R1dG9zIGUgQ290YXM8L2J1dHRvbj4gLS0+XG48L21hdC1tZW51PlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpIHRocm93RmlsdGVyU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBmaWx0ZXJTZWxlY3RlZDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBmaWx0ZXJFdmVudChldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSkge1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudGhyb3dGaWx0ZXJTZWxlY3RlZC5lbWl0KHRoaXMuZmlsdGVyU2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBmaWx0ZXJUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbHRlclNlbGVjdGVkID8gdGhpcy5maWx0ZXJTZWxlY3RlZCA6ICdGaWx0cmFyJztcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tCYXJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7IH1cblxuICBwdWJsaWMgb3BlblNuYWNrQmFyKG1lc3NhZ2U6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcgPSAnT0snLCBkdXJhdGlvbjogbnVtYmVyID0gMzAwMCkge1xuICAgIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCBhY3Rpb24sIHtcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIHBhbmVsQ2xhc3M6IFsnbWF0LXNuYWNrLWJhci1jb250YWluZXInXVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYy1kaWFsb2ctYWxlcnQnLFxuICB0ZW1wbGF0ZTogYDxoMiBtYXQtZGlhbG9nLXRpdGxlPnt7dGl0bGV9fTwvaDI+XG5cbjxtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gIDxwIGNsYXNzPVwidGV4dC1jZW50ZXJcIltpbm5lckhUTUxdPVwibWVzc2FnZVwiPjwvcD5cbjwvbWF0LWRpYWxvZy1jb250ZW50PlxuXG48bWF0LWRpYWxvZy1hY3Rpb25zPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCI+T0s8L2J1dHRvbj5cbjwvbWF0LWRpYWxvZy1hY3Rpb25zPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHRpdGxlO1xuICBwdWJsaWMgbWVzc2FnZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0FsZXJ0Q29tcG9uZW50PikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpYWxvZ0FsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vZGlhbG9nLWFsZXJ0L2RpYWxvZy1hbGVydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2dDb25maWcsIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQWxlcnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgIHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvbikge1xuXG4gIH1cblxuICBwdWJsaWMgb3BlbkFsZXJ0RGlhbG9nKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IGRpYWxvZ0NvbmZpZyA9IG5ldyBNYXREaWFsb2dDb25maWcoKTtcblxuICAgIGRpYWxvZ0NvbmZpZy5kaXNhYmxlQ2xvc2UgPSB0cnVlO1xuICAgIGRpYWxvZ0NvbmZpZy5hdXRvRm9jdXMgPSB0cnVlO1xuXG4gICAgbGV0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0FsZXJ0Q29tcG9uZW50PjtcbiAgICBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0FsZXJ0Q29tcG9uZW50LCBkaWFsb2dDb25maWcpO1xuXG4gICAgZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLnRpdGxlID0gdGl0bGU7XG4gICAgZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgcHVibGljIG9wZW5BbGVydERpYWxvZ0FjdGlvbih0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkaWFsb2dDb25maWcgPSBuZXcgTWF0RGlhbG9nQ29uZmlnKCk7XG5cbiAgICBkaWFsb2dDb25maWcuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcbiAgICBkaWFsb2dDb25maWcuYXV0b0ZvY3VzID0gdHJ1ZTtcblxuICAgIGxldCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEaWFsb2dBbGVydENvbXBvbmVudD47XG4gICAgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dBbGVydENvbXBvbmVudCwgZGlhbG9nQ29uZmlnKTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHRzID0+IHtcbiAgICAgIHRoaXMuX2xvY2F0aW9uLmJhY2soKTtcbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS50aXRsZSA9IHRpdGxlO1xuICAgIGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTGNEZXZraXRDb21wb25lbnQgfSBmcm9tICcuL25nLWxjLWRldmtpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcblxuaW1wb3J0IHtcbiAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gIE1hdEJ1dHRvbk1vZHVsZSxcbiAgTWF0VGFic01vZHVsZSxcbiAgTWF0Q2hpcHNNb2R1bGUsXG4gIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gIE1hdE1lbnVNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsXG4gIE1hdFNuYWNrQmFyTW9kdWxlLFxuICBNYXREaWFsb2dNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVGltZWxpbmVJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lbGluZS1pdGVtLWRldGFpbC90aW1lbGluZS1pdGVtLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGltZWxpbmVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lbGluZS1pdGVtL3RpbWVsaW5lLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFRpbWVsaW5lVGFic0NvbXBvbmVudCB9IGZyb20gJy4vdGltZWxpbmUtdGFicy90aW1lbGluZS10YWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlclNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLXNlbGVjdC9maWx0ZXItc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbmFja0JhclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NuYWNrLWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IERpYWxvZ0FsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctYWxlcnQvZGlhbG9nLWFsZXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dBbGVydFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RpYWxvZy1hbGVydC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmdMY0RldmtpdENvbXBvbmVudCxcbiAgICBQcm9ncmVzc0JhckNvbXBvbmVudCxcbiAgICBUaW1lbGluZUl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgVGltZWxpbmVJdGVtQ29tcG9uZW50LFxuICAgIFRpbWVsaW5lVGFic0NvbXBvbmVudCxcbiAgICBEYXRlcGlja2VyQ29tcG9uZW50LFxuICAgIEZpbHRlclNlbGVjdENvbXBvbmVudCxcbiAgICBEaWFsb2dBbGVydENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmdMY0RldmtpdENvbXBvbmVudCxcbiAgICBQcm9ncmVzc0JhckNvbXBvbmVudCxcbiAgICBUaW1lbGluZUl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgVGltZWxpbmVJdGVtQ29tcG9uZW50LFxuICAgIFRpbWVsaW5lVGFic0NvbXBvbmVudCxcbiAgICBEYXRlcGlja2VyQ29tcG9uZW50LFxuICAgIEZpbHRlclNlbGVjdENvbXBvbmVudCxcbiAgICBEaWFsb2dBbGVydENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtTbmFja0JhclNlcnZpY2UsIERpYWxvZ0FsZXJ0U2VydmljZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW0RpYWxvZ0FsZXJ0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ0xjRGV2a2l0TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7NEJBSkQ7Ozs7Ozs7QUNBQTtJQWFFO0tBQWlCOzs7O0lBRWpCLHNDQUFROzs7SUFBUjtLQUNDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLG9EQUlUO29CQUNELE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7OzhCQVZEOzs7Ozs7O0FDQUE7SUErRUU7cUJBSFEsT0FBTzt1QkFDTCxTQUFTO0tBRUY7Ozs7SUFFakIsdUNBQVE7OztJQUFSO0tBQ0M7SUFFRCxzQkFBYSw4Q0FBWTs7Ozs7UUFBekIsVUFBMEIsS0FBYTtZQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1Qjs7O09BQUE7SUFFRCxzQkFBYSxrREFBZ0I7Ozs7UUF3QjdCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDL0I7Ozs7O1FBMUJELFVBQThCLEtBQWE7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztTQUNoQzs7O09BQUE7SUFFRCxzQkFBYSx5Q0FBTzs7Ozs7UUFBcEIsVUFBcUIsS0FBYztZQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1Qjs7O09BQUE7SUFFRCxzQkFBYSxrREFBZ0I7Ozs7UUFvQjdCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDL0I7Ozs7O1FBdEJELFVBQThCLEtBQWE7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztTQUNoQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLE9BQU8sR0FBRyxPQUFPLEdBQUcsVUFBVSxDQUFDO1NBQzlEOzs7T0FBQTtJQUVELHNCQUFJLHFEQUFtQjs7OztRQUF2QjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxPQUFPLEdBQUcsaUJBQWlCLEdBQUcsY0FBYyxDQUFDO1NBQzVFOzs7T0FBQTtJQUVELHNCQUFJLHNEQUFvQjs7OztRQUF4QjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxPQUFPLEdBQUcsbUJBQW1CLEdBQUcsYUFBYSxDQUFDO1NBQzdFOzs7T0FBQTtJQVVELHNCQUFJLG1EQUFpQjs7OztRQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUMzQjs7O09BQUE7SUFFRCxzQkFBSSxpREFBZTs7OztRQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxPQUFPLEdBQUcsbUNBQW1DLEdBQUcsK0JBQStCLENBQUE7U0FDOUc7OztPQUFBOztnQkE1SEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxpL0RBZ0VYO2lCQUNBOzs7OzsrQkFlRSxLQUFLO21DQUlMLEtBQUs7MEJBSUwsS0FBSzttQ0FJTCxLQUFLOzsrQkFoR1I7Ozs7Ozs7QUNBQTtJQXFCRTtLQUFpQjs7OztJQUVqQiw4Q0FBUTs7O0lBQVI7S0FDQzs7Z0JBdEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUUsb1hBYUw7aUJBQ047Ozs7c0NBbEJEOzs7Ozs7O0FDQUE7SUFnREU7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztLQUM3Qjs7OztJQUVELHdDQUFROzs7SUFBUjtLQUNDO0lBRUQsc0JBQWEsZ0RBQWE7Ozs7O1FBQTFCLFVBQTJCLEtBQVU7WUFDbkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztTQUNqQzs7O09BQUE7SUFFRCxzQkFBSSxvREFBaUI7Ozs7UUFBckI7WUFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUM7U0FDN0M7OztPQUFBO0lBRUQsc0JBQUksdURBQW9COzs7O1FBQXhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztTQUM5Qzs7O09BQUE7SUFFRCxzQkFBSSx3REFBcUI7Ozs7UUFBekI7WUFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUM7U0FDOUM7OztPQUFBOzs7O0lBRUQsOERBQThCOzs7SUFBOUI7UUFDRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLEVBQUU7WUFDL0csT0FBTyxvQkFBb0IsQ0FBQztTQUM3QjthQUFNLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixLQUFLLFNBQVMsRUFBRTtZQUN0SCxPQUFPLG9CQUFvQixDQUFDO1NBQzdCO2FBQU0sSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEtBQUssT0FBTyxFQUFFO1lBQ3BILE9BQU8saUJBQWlCLENBQUM7U0FDMUI7YUFBTSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsS0FBSyxPQUFPLEVBQUU7WUFDcEgsT0FBTyxpQkFBaUIsQ0FBQztTQUMxQjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUM7U0FDZjtLQUNGOzs7O0lBRUQsb0RBQW9COzs7SUFBcEI7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztLQUM1Qzs7Z0JBcEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsbXVDQW9DWDtpQkFFQTs7Ozs7Z0NBWUUsS0FBSzs7Z0NBdkRSOzs7Ozs7O0FDQUE7SUF1REU7OEJBN0J3QjtZQUNwQjtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUU7b0JBQ1IsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFO29CQUM1RSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUU7aUJBQzVFO2FBQ0Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsZUFBZTtnQkFDdEIsUUFBUSxFQUFFO29CQUNSLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRTtpQkFDN0U7YUFDRDtZQUNEO2dCQUNDLEtBQUssRUFBRSxlQUFlO2dCQUN0QixRQUFRLEVBQUU7b0JBQ1IsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFO29CQUM1RSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUU7aUJBQzlFO2FBQ0Q7WUFDRDtnQkFDQyxLQUFLLEVBQUUsZUFBZTtnQkFDdEIsUUFBUSxFQUFFO29CQUNSLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRTtpQkFDakY7YUFDRDtTQUNMO0tBRWdCOzs7O0lBRWpCLHdDQUFROzs7SUFBUjtLQUNDOztnQkF4REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxra0JBa0JYO2lCQUNBOzs7O2dDQXZCRDs7Ozs7OztBQ0FBO0lBZ0JFO0tBQWlCOzs7O0lBRWpCLHNDQUFROzs7SUFBUjtLQUVDO0lBRUQsc0JBQWEsMENBQVM7Ozs7O1FBQXRCLFVBQXVCLEtBQWE7WUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7OztPQUFBO0lBRUQsc0JBQUksOENBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7OztPQUFBOztnQkExQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsc0xBS1g7b0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7Ozs0QkFXRSxLQUFLOzs4QkF0QlI7Ozs7Ozs7QUNBQTtJQW9CRTttQ0FIbUQsSUFBSSxZQUFZLEVBQUU7S0FHcEQ7Ozs7SUFFakIsd0NBQVE7OztJQUFSO0tBQ0M7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLEtBQVU7UUFDcEIsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3BEO0tBQ0Y7SUFFRCxzQkFBSSw2Q0FBVTs7OztRQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1NBQzlEOzs7T0FBQTs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsb2lCQVFYO29CQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDYjs7Ozs7c0NBR0UsTUFBTTs7Z0NBakJUOzs7Ozs7O0FDQUE7SUFRRSx5QkFBbUIsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtLQUFLOzs7Ozs7O0lBRXRDLHNDQUFZOzs7Ozs7Y0FBQyxPQUFlLEVBQUUsTUFBcUIsRUFBRSxRQUF1QjtRQUE5Qyx1QkFBQSxFQUFBLGFBQXFCO1FBQUUseUJBQUEsRUFBQSxlQUF1QjtRQUNqRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFO1lBQ2xDLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFVBQVUsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3hDLENBQUMsQ0FBQzs7O2dCQVhOLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsV0FBVzs7OzBCQURwQjs7Ozs7OztBQ0FBO0lBcUJFLDhCQUFvQixTQUE2QztRQUE3QyxjQUFTLEdBQVQsU0FBUyxDQUFvQztLQUFLOzs7O0lBRXRFLHVDQUFROzs7SUFBUjtLQUNDOzs7O0lBRUQsb0NBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUN4Qjs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsd1BBUVU7b0JBQ3BCLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDYjs7OztnQkFkUSxZQUFZOzsrQkFEckI7Ozs7Ozs7QUNBQTtJQVVFLDRCQUFvQixNQUFpQixFQUMzQjtRQURVLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDM0IsY0FBUyxHQUFULFNBQVM7S0FFbEI7Ozs7OztJQUVNLDRDQUFlOzs7OztjQUFDLEtBQWEsRUFBRSxPQUFlOztRQUNuRCxJQUFNLFlBQVksR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBRTNDLFlBQVksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOztRQUU5QixJQUFJLFNBQVMsQ0FBcUM7UUFDbEQsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRWpFLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOzs7Ozs7O0lBR3pDLGtEQUFxQjs7Ozs7Y0FBQyxLQUFhLEVBQUUsT0FBZTs7O1FBQ3pELElBQU0sWUFBWSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFFM0MsWUFBWSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDakMsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7O1FBRTlCLElBQUksU0FBUyxDQUFxQztRQUNsRCxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFakUsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDdkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN2QixDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsaUJBQWlCLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMxQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7O2dCQXJDakQsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMdUMsU0FBUztnQkFDeEMsUUFBUTs7OzZCQUhqQjs7Ozs7OztBQ0FBOzs7O2dCQTBCQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLGVBQWU7cUJBQ2hCO29CQUNELFlBQVksRUFBRTt3QkFDWixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsMkJBQTJCO3dCQUMzQixxQkFBcUI7d0JBQ3JCLHFCQUFxQjt3QkFDckIsbUJBQW1CO3dCQUNuQixxQkFBcUI7d0JBQ3JCLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQiwyQkFBMkI7d0JBQzNCLHFCQUFxQjt3QkFDckIscUJBQXFCO3dCQUNyQixtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsb0JBQW9CO3FCQUNyQjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUM7b0JBQ2hELGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUN4Qzs7MkJBN0REOzs7Ozs7Ozs7Ozs7Ozs7In0=