(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material'), require('@angular/material/snack-bar'), require('@angular/common'), require('@angular/material/dialog')) :
    typeof define === 'function' && define.amd ? define('ng-lc-devkit', ['exports', '@angular/core', '@angular/material', '@angular/material/snack-bar', '@angular/common', '@angular/material/dialog'], factory) :
    (factory((global['ng-lc-devkit'] = {}),global.ng.core,global.ng.material,global.ng.material['snack-bar'],global.ng.common,global.ng.material.dialog));
}(this, (function (exports,i0,material,i1,i2,i1$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgLcDevkitService = (function () {
        function NgLcDevkitService() {
        }
        NgLcDevkitService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        NgLcDevkitService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgLcDevkitService.ngInjectableDef = i0.defineInjectable({ factory: function NgLcDevkitService_Factory() { return new NgLcDevkitService(); }, token: NgLcDevkitService, providedIn: "root" });
        return NgLcDevkitService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgLcDevkitComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var ProgressBarComponent = (function () {
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
             */ function (value) {
                this._progressType = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressBarComponent.prototype, "progressValueOne", {
            get: /**
             * @return {?}
             */ function () {
                return this._progressValueOne;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._progressValueOne = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressBarComponent.prototype, "iconTop", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._progressIcon = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressBarComponent.prototype, "progressValueTwo", {
            get: /**
             * @return {?}
             */ function () {
                return this._progressValueTwo;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._progressValueTwo = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressBarComponent.prototype, "typeName", {
            get: /**
             * @return {?}
             */ function () {
                return this._progressType === 'quota' ? 'Cotas' : 'Produtos';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressBarComponent.prototype, "getFirstBottomLabel", {
            get: /**
             * @return {?}
             */ function () {
                return this._progressType === 'quota' ? 'Valor Resgatado' : 'Presenteados';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressBarComponent.prototype, "getSecondBottomLabel", {
            get: /**
             * @return {?}
             */ function () {
                return this._progressType === 'quota' ? 'Valor Presenteado' : 'Adicionados';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressBarComponent.prototype, "progressIconImage", {
            get: /**
             * @return {?}
             */ function () {
                return this._progressIcon;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressBarComponent.prototype, "progressIconSrc", {
            get: /**
             * @return {?}
             */ function () {
                return this._progressType === 'quota' ? 'assets/images/ico-plane-black.svg' : 'assets/images/ico-product.svg';
            },
            enumerable: true,
            configurable: true
        });
        ProgressBarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lc-progress-bar',
                        template: "<div>\n  <div class=\"icon\" *ngIf=\"progressIconImage\">\n    <figure>\n      <img [src]=\"progressIconSrc\" alt=\"\">\n    </figure>\n    <p>\n      {{ typeName }}\n    </p>\n  </div>\n  <div class=\"texts\">\n    <span *ngIf=\"_progressType !== quota\" [ngClass]=\"\n      {\n      'green' : _progressType === product,\n      'pink' : _progressType === quota\n      }\">{{\n      progressValueOne }}</span>\n    <span *ngIf=\"_progressType !== quota\">{{ progressValueTwo }}</span>\n\n    <span *ngIf=\"_progressType === quota\" [ngClass]=\"\n      {\n      'green' : _progressType === product,\n      'pink' : _progressType === quota\n      }\">{{\n      progressValueOne | currency:'BRL' }}\n    </span>\n    <span *ngIf=\"_progressType === 'quota'\">{{ progressValueTwo | currency:'BRL' }}\n    </span>\n  </div>\n  <mat-progress-bar mode=\"determinate\" value=\"40\" [ngClass]=\"\n    {\n    'green' : _progressType === product,\n    'pink' : _progressType === quota\n    }\"></mat-progress-bar>\n  <div class=\"texts\">\n    <span class=\"bottom\" [ngClass]=\"\n      {\n      'green' : _progressType === product,\n      'quota' : _progressType === quota\n      }\">{{\n      getFirstBottomLabel }}</span>\n    <span class=\"bottom\">{{ getSecondBottomLabel }}</span>\n  </div>\n</div>\n\n\n<div class=\"second-progress-bar\">\n  <div class=\"texts\">\n    <span *ngIf=\"_progressType !== quota\" class=\"blue\">{{\n      progressValueOne }}</span>\n    <span *ngIf=\"_progressType !== quota\">{{ progressValueTwo }}</span>\n\n    <span *ngIf=\"_progressType === quota\" class=\"blue\">{{\n      progressValueOne | currency:'BRL' }}\n    </span>\n    <span *ngIf=\"_progressType === quota\">{{ progressValueTwo | currency:'BRL' }}\n    </span>\n  </div>\n  <mat-progress-bar mode=\"determinate\" value=\"40\" class=\"blue\"></mat-progress-bar>\n  <div class=\"texts\">\n    <span class=\"bottom blue\">{{\n      getFirstBottomLabel }}</span>\n    <span class=\"bottom\">{{ getSecondBottomLabel }}</span>\n  </div>\n</div>\n"
                    },] },
        ];
        /** @nocollapse */
        ProgressBarComponent.ctorParameters = function () { return []; };
        ProgressBarComponent.propDecorators = {
            progressType: [{ type: i0.Input }],
            progressValueOne: [{ type: i0.Input }],
            iconTop: [{ type: i0.Input }],
            progressValueTwo: [{ type: i0.Input }]
        };
        return ProgressBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TimelineItemDetailComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var TimelineItemComponent = (function () {
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
             */ function (value) {
                this._movimentationItem = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimelineItemComponent.prototype, "movimentationType", {
            get: /**
             * @return {?}
             */ function () {
                return this._movimentationItem.movementType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimelineItemComponent.prototype, "getMovimentationName", {
            get: /**
             * @return {?}
             */ function () {
                return this.getMovimentationNameValidation();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimelineItemComponent.prototype, "getMovimentationValue", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: i0.Component, args: [{
                        selector: 'lc-timeline-item',
                        template: "<div class=\"row\">\n  <div class=\"button-action col-auto\">\n    <button\n      mat-raised-button\n      class=\"fab-more\"\n      [ngClass]=\"\n        { 'rescue': movimentationType === 'rescue' }\n      \"\n      (click)=\"actionShowItemDetail()\"\n      >\n      <span> {{ movimentationType === 'rescue' ? '-' : '+' }} </span>\n    </button>\n  </div>\n\n  <div class=\"text-content col-auto\" (click)=\"actionShowItemDetail()\">\n    <p [ngClass]=\"{ 'rescue': movimentationType === 'rescue' }\">{{ getMovimentationName }}</p>\n    <span>\n      Kitchenaid Batedeira Planet\u00E1ria 6 velocidades\n    </span>\n  </div>\n\n  <div class=\"col-auto value\">\n    <span [ngClass]=\"{ 'rescue': movimentationType === 'rescue' }\">\n      {{ movimentationType === 'rescue' ? '-'  : '+'}} {{ getMovimentationValue | currency:'BRL' }}\n    </span>\n  </div>\n\n  <div class=\"col-12\" style=\"overflow: hidden;\" *ngIf=\"showItemDetail\">\n    <lc-timeline-item-detail *ngIf=\"showItemDetail\"></lc-timeline-item-detail>\n  </div>\n\n  <!-- <div class=\"col-12\" style=\"overflow: hidden;\" @slideState *ngIf=\"showItemDetail\">\n    <app-timeline-item-detail @slideState *ngIf=\"showItemDetail\"></app-timeline-item-detail>\n  </div> -->\n\n</div>\n",
                    },] },
        ];
        /** @nocollapse */
        TimelineItemComponent.ctorParameters = function () { return []; };
        TimelineItemComponent.propDecorators = {
            movimentation: [{ type: i0.Input }]
        };
        return TimelineItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TimelineTabsComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var DatepickerComponent = (function () {
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
             */ function (value) {
                this._labelText = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DatepickerComponent.prototype, "labelTextView", {
            get: /**
             * @return {?}
             */ function () {
                return this._labelText;
            },
            enumerable: true,
            configurable: true
        });
        DatepickerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lc-datepicker',
                        template: "<div (click)=\"picker.open()\">\n  <label>{{ labelTextView }}</label>\n  <input [matDatepicker]=\"picker\">\n  <mat-datepicker #picker id=\"datePicker\"></mat-datepicker>\n</div>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        DatepickerComponent.ctorParameters = function () { return []; };
        DatepickerComponent.propDecorators = {
            labelText: [{ type: i0.Input }]
        };
        return DatepickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FilterSelectComponent = (function () {
        function FilterSelectComponent() {
            this.throwFilterSelected = new i0.EventEmitter();
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
             */ function () {
                return this.filterSelected ? this.filterSelected : 'Filtrar';
            },
            enumerable: true,
            configurable: true
        });
        FilterSelectComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lc-filter-select',
                        template: "<button mat-raised-button [matMenuTriggerFor]=\"menu\">\n  <mat-icon>filter_list</mat-icon> {{ filterText }} <mat-icon>keyboard_arrow_down</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\" [class]=\"'filter-select'\">\n  <button mat-menu-item (click)=\"filterEvent($event)\" [value]=\"'Produtos'\">Produtos</button>\n  <button mat-menu-item (click)=\"filterEvent($event)\" [value]=\"'Cotas'\">Cotas</button>\n  <!-- <button mat-menu-item (click)=\"filterEvent($event)\" [value]=\"'Produtos e Cotas'\">Produtos e Cotas</button> -->\n</mat-menu>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        FilterSelectComponent.ctorParameters = function () { return []; };
        FilterSelectComponent.propDecorators = {
            throwFilterSelected: [{ type: i0.Output }]
        };
        return FilterSelectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SnackBarService = (function () {
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
                if (action === void 0) {
                    action = 'OK';
                }
                if (duration === void 0) {
                    duration = 3000;
                }
                this.snackBar.open(message, action, {
                    duration: duration,
                    panelClass: ['mat-snack-bar-container']
                });
            };
        SnackBarService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        SnackBarService.ctorParameters = function () {
            return [
                { type: material.MatSnackBar }
            ];
        };
        /** @nocollapse */ SnackBarService.ngInjectableDef = i0.defineInjectable({ factory: function SnackBarService_Factory() { return new SnackBarService(i0.inject(i1.MatSnackBar)); }, token: SnackBarService, providedIn: "root" });
        return SnackBarService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DialogAlertComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'lc-dialog-alert',
                        template: "<h2 mat-dialog-title>{{title}}</h2>\n\n<mat-dialog-content>\n  <p class=\"text-center\"[innerHTML]=\"message\"></p>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button (click)=\"close()\">OK</button>\n</mat-dialog-actions>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        DialogAlertComponent.ctorParameters = function () {
            return [
                { type: material.MatDialogRef }
            ];
        };
        return DialogAlertComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DialogAlertService = (function () {
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
                var dialogConfig = new material.MatDialogConfig();
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
                var dialogConfig = new material.MatDialogConfig();
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        DialogAlertService.ctorParameters = function () {
            return [
                { type: material.MatDialog },
                { type: i2.Location }
            ];
        };
        /** @nocollapse */ DialogAlertService.ngInjectableDef = i0.defineInjectable({ factory: function DialogAlertService_Factory() { return new DialogAlertService(i0.inject(i1$1.MatDialog), i0.inject(i2.Location)); }, token: DialogAlertService, providedIn: "root" });
        return DialogAlertService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgLcDevkitModule = (function () {
        function NgLcDevkitModule() {
        }
        NgLcDevkitModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i2.CommonModule,
                            material.MatProgressBarModule,
                            material.MatButtonModule,
                            material.MatTabsModule,
                            material.MatChipsModule,
                            material.MatDatepickerModule,
                            material.MatMenuModule,
                            material.MatIconModule,
                            material.MatSnackBarModule,
                            material.MatDialogModule
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

    exports.NgLcDevkitService = NgLcDevkitService;
    exports.NgLcDevkitComponent = NgLcDevkitComponent;
    exports.NgLcDevkitModule = NgLcDevkitModule;
    exports.ProgressBarComponent = ProgressBarComponent;
    exports.TimelineTabsComponent = TimelineTabsComponent;
    exports.TimelineItemComponent = TimelineItemComponent;
    exports.TimelineItemDetailComponent = TimelineItemDetailComponent;
    exports.DatepickerComponent = DatepickerComponent;
    exports.FilterSelectComponent = FilterSelectComponent;
    exports.SnackBarService = SnackBarService;
    exports.DialogAlertService = DialogAlertService;
    exports.ɵa = DialogAlertComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbGMtZGV2a2l0LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctbGMtZGV2a2l0L2xpYi9uZy1sYy1kZXZraXQuc2VydmljZS50cyIsIm5nOi8vbmctbGMtZGV2a2l0L2xpYi9uZy1sYy1kZXZraXQuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1sYy1kZXZraXQvbGliL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1sYy1kZXZraXQvbGliL3RpbWVsaW5lLWl0ZW0tZGV0YWlsL3RpbWVsaW5lLWl0ZW0tZGV0YWlsLmNvbXBvbmVudC50cyIsIm5nOi8vbmctbGMtZGV2a2l0L2xpYi90aW1lbGluZS1pdGVtL3RpbWVsaW5lLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9uZy1sYy1kZXZraXQvbGliL3RpbWVsaW5lLXRhYnMvdGltZWxpbmUtdGFicy5jb21wb25lbnQudHMiLCJuZzovL25nLWxjLWRldmtpdC9saWIvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmctbGMtZGV2a2l0L2xpYi9maWx0ZXItc2VsZWN0L2ZpbHRlci1zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1sYy1kZXZraXQvbGliL3NlcnZpY2VzL3NuYWNrLWJhci5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1sYy1kZXZraXQvbGliL2RpYWxvZy1hbGVydC9kaWFsb2ctYWxlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1sYy1kZXZraXQvbGliL3NlcnZpY2VzL2RpYWxvZy1hbGVydC5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1sYy1kZXZraXQvbGliL25nLWxjLWRldmtpdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ0xjRGV2a2l0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xjLW5nLWxjLWRldmtpdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBuZy1sYy1kZXZraXQgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5nTGNEZXZraXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xjLXByb2dyZXNzLWJhcicsXG4gIHRlbXBsYXRlOiBgPGRpdj5cbiAgPGRpdiBjbGFzcz1cImljb25cIiAqbmdJZj1cInByb2dyZXNzSWNvbkltYWdlXCI+XG4gICAgPGZpZ3VyZT5cbiAgICAgIDxpbWcgW3NyY109XCJwcm9ncmVzc0ljb25TcmNcIiBhbHQ9XCJcIj5cbiAgICA8L2ZpZ3VyZT5cbiAgICA8cD5cbiAgICAgIHt7IHR5cGVOYW1lIH19XG4gICAgPC9wPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInRleHRzXCI+XG4gICAgPHNwYW4gKm5nSWY9XCJfcHJvZ3Jlc3NUeXBlICE9PSBxdW90YVwiIFtuZ0NsYXNzXT1cIlxuICAgICAge1xuICAgICAgJ2dyZWVuJyA6IF9wcm9ncmVzc1R5cGUgPT09IHByb2R1Y3QsXG4gICAgICAncGluaycgOiBfcHJvZ3Jlc3NUeXBlID09PSBxdW90YVxuICAgICAgfVwiPnt7XG4gICAgICBwcm9ncmVzc1ZhbHVlT25lIH19PC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwiX3Byb2dyZXNzVHlwZSAhPT0gcXVvdGFcIj57eyBwcm9ncmVzc1ZhbHVlVHdvIH19PC9zcGFuPlxuXG4gICAgPHNwYW4gKm5nSWY9XCJfcHJvZ3Jlc3NUeXBlID09PSBxdW90YVwiIFtuZ0NsYXNzXT1cIlxuICAgICAge1xuICAgICAgJ2dyZWVuJyA6IF9wcm9ncmVzc1R5cGUgPT09IHByb2R1Y3QsXG4gICAgICAncGluaycgOiBfcHJvZ3Jlc3NUeXBlID09PSBxdW90YVxuICAgICAgfVwiPnt7XG4gICAgICBwcm9ncmVzc1ZhbHVlT25lIHwgY3VycmVuY3k6J0JSTCcgfX1cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJfcHJvZ3Jlc3NUeXBlID09PSAncXVvdGEnXCI+e3sgcHJvZ3Jlc3NWYWx1ZVR3byB8IGN1cnJlbmN5OidCUkwnIH19XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgPG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImRldGVybWluYXRlXCIgdmFsdWU9XCI0MFwiIFtuZ0NsYXNzXT1cIlxuICAgIHtcbiAgICAnZ3JlZW4nIDogX3Byb2dyZXNzVHlwZSA9PT0gcHJvZHVjdCxcbiAgICAncGluaycgOiBfcHJvZ3Jlc3NUeXBlID09PSBxdW90YVxuICAgIH1cIj48L21hdC1wcm9ncmVzcy1iYXI+XG4gIDxkaXYgY2xhc3M9XCJ0ZXh0c1wiPlxuICAgIDxzcGFuIGNsYXNzPVwiYm90dG9tXCIgW25nQ2xhc3NdPVwiXG4gICAgICB7XG4gICAgICAnZ3JlZW4nIDogX3Byb2dyZXNzVHlwZSA9PT0gcHJvZHVjdCxcbiAgICAgICdxdW90YScgOiBfcHJvZ3Jlc3NUeXBlID09PSBxdW90YVxuICAgICAgfVwiPnt7XG4gICAgICBnZXRGaXJzdEJvdHRvbUxhYmVsIH19PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiYm90dG9tXCI+e3sgZ2V0U2Vjb25kQm90dG9tTGFiZWwgfX08L3NwYW4+XG4gIDwvZGl2PlxuPC9kaXY+XG5cblxuPGRpdiBjbGFzcz1cInNlY29uZC1wcm9ncmVzcy1iYXJcIj5cbiAgPGRpdiBjbGFzcz1cInRleHRzXCI+XG4gICAgPHNwYW4gKm5nSWY9XCJfcHJvZ3Jlc3NUeXBlICE9PSBxdW90YVwiIGNsYXNzPVwiYmx1ZVwiPnt7XG4gICAgICBwcm9ncmVzc1ZhbHVlT25lIH19PC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwiX3Byb2dyZXNzVHlwZSAhPT0gcXVvdGFcIj57eyBwcm9ncmVzc1ZhbHVlVHdvIH19PC9zcGFuPlxuXG4gICAgPHNwYW4gKm5nSWY9XCJfcHJvZ3Jlc3NUeXBlID09PSBxdW90YVwiIGNsYXNzPVwiYmx1ZVwiPnt7XG4gICAgICBwcm9ncmVzc1ZhbHVlT25lIHwgY3VycmVuY3k6J0JSTCcgfX1cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJfcHJvZ3Jlc3NUeXBlID09PSBxdW90YVwiPnt7IHByb2dyZXNzVmFsdWVUd28gfCBjdXJyZW5jeTonQlJMJyB9fVxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxtYXQtcHJvZ3Jlc3MtYmFyIG1vZGU9XCJkZXRlcm1pbmF0ZVwiIHZhbHVlPVwiNDBcIiBjbGFzcz1cImJsdWVcIj48L21hdC1wcm9ncmVzcy1iYXI+XG4gIDxkaXYgY2xhc3M9XCJ0ZXh0c1wiPlxuICAgIDxzcGFuIGNsYXNzPVwiYm90dG9tIGJsdWVcIj57e1xuICAgICAgZ2V0Rmlyc3RCb3R0b21MYWJlbCB9fTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImJvdHRvbVwiPnt7IGdldFNlY29uZEJvdHRvbUxhYmVsIH19PC9zcGFuPlxuICA8L2Rpdj5cbjwvZGl2PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIF9wcm9ncmVzc1R5cGU6IHN0cmluZztcbiAgX3Byb2dyZXNzVmFsdWVPbmU6IG51bWJlcjtcbiAgX3Byb2dyZXNzVmFsdWVUd286IG51bWJlcjtcbiAgX3Byb2dyZXNzSWNvbjogYm9vbGVhbjtcblxuICBxdW90YSA9ICdxdW90YSc7XG4gIHByb2R1Y3QgPSAncHJvZHVjdCc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBwcm9ncmVzc1R5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb2dyZXNzVHlwZSA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHByb2dyZXNzVmFsdWVPbmUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3Byb2dyZXNzVmFsdWVPbmUgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBpY29uVG9wKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcHJvZ3Jlc3NJY29uID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgcHJvZ3Jlc3NWYWx1ZVR3byh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcHJvZ3Jlc3NWYWx1ZVR3byA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHR5cGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9ncmVzc1R5cGUgPT09ICdxdW90YScgPyAnQ290YXMnIDogJ1Byb2R1dG9zJztcbiAgfVxuXG4gIGdldCBnZXRGaXJzdEJvdHRvbUxhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9ncmVzc1R5cGUgPT09ICdxdW90YScgPyAnVmFsb3IgUmVzZ2F0YWRvJyA6ICdQcmVzZW50ZWFkb3MnO1xuICB9XG5cbiAgZ2V0IGdldFNlY29uZEJvdHRvbUxhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9ncmVzc1R5cGUgPT09ICdxdW90YScgPyAnVmFsb3IgUHJlc2VudGVhZG8nIDogJ0FkaWNpb25hZG9zJztcbiAgfVxuXG4gIGdldCBwcm9ncmVzc1ZhbHVlT25lKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9ncmVzc1ZhbHVlT25lO1xuICB9XG5cbiAgZ2V0IHByb2dyZXNzVmFsdWVUd28oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzVmFsdWVUd287XG4gIH1cblxuICBnZXQgcHJvZ3Jlc3NJY29uSW1hZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzSWNvbjtcbiAgfVxuXG4gIGdldCBwcm9ncmVzc0ljb25TcmMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzVHlwZSA9PT0gJ3F1b3RhJyA/ICdhc3NldHMvaW1hZ2VzL2ljby1wbGFuZS1ibGFjay5zdmcnIDogJ2Fzc2V0cy9pbWFnZXMvaWNvLXByb2R1Y3Quc3ZnJ1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xjLXRpbWVsaW5lLWl0ZW0tZGV0YWlsJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiPlxuICAgIDxkaXYgY2xhc3M9XCJpbWctaXRlbVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbCBpbmZvcy1pdGVtXCI+XG4gICAgPHA+XG4gICAgICAgIEtpdGNoZW5haWQgQmF0ZWRlaXJhIFBsYW5ldMODwqFyaWEgNiB2ZWwuIHByYXRhIDExMHYgLSBTS0w5OTk5OTk5OTk5XG4gICAgPC9wPlxuICAgIDxzcGFuPlxuICAgICAgICBDb252aWRhZG86IEFuYSBMdcODwq16YSBTb3V0b1xuICAgIDwvc3Bhbj5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uPlByZXNlbnRlYXIgdW0gY2FzYWw8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5gLFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lbGluZUl0ZW1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBzbGlkZVN0YXRlVHJpZ2dlciwgbWFya2VkVHJpZ2dlciB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYy10aW1lbGluZS1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJidXR0b24tYWN0aW9uIGNvbC1hdXRvXCI+XG4gICAgPGJ1dHRvblxuICAgICAgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgIGNsYXNzPVwiZmFiLW1vcmVcIlxuICAgICAgW25nQ2xhc3NdPVwiXG4gICAgICAgIHsgJ3Jlc2N1ZSc6IG1vdmltZW50YXRpb25UeXBlID09PSAncmVzY3VlJyB9XG4gICAgICBcIlxuICAgICAgKGNsaWNrKT1cImFjdGlvblNob3dJdGVtRGV0YWlsKClcIlxuICAgICAgPlxuICAgICAgPHNwYW4+IHt7IG1vdmltZW50YXRpb25UeXBlID09PSAncmVzY3VlJyA/ICctJyA6ICcrJyB9fSA8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJ0ZXh0LWNvbnRlbnQgY29sLWF1dG9cIiAoY2xpY2spPVwiYWN0aW9uU2hvd0l0ZW1EZXRhaWwoKVwiPlxuICAgIDxwIFtuZ0NsYXNzXT1cInsgJ3Jlc2N1ZSc6IG1vdmltZW50YXRpb25UeXBlID09PSAncmVzY3VlJyB9XCI+e3sgZ2V0TW92aW1lbnRhdGlvbk5hbWUgfX08L3A+XG4gICAgPHNwYW4+XG4gICAgICBLaXRjaGVuYWlkIEJhdGVkZWlyYSBQbGFuZXTDg8KhcmlhIDYgdmVsb2NpZGFkZXNcbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtYXV0byB2YWx1ZVwiPlxuICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsgJ3Jlc2N1ZSc6IG1vdmltZW50YXRpb25UeXBlID09PSAncmVzY3VlJyB9XCI+XG4gICAgICB7eyBtb3ZpbWVudGF0aW9uVHlwZSA9PT0gJ3Jlc2N1ZScgPyAnLScgIDogJysnfX0ge3sgZ2V0TW92aW1lbnRhdGlvblZhbHVlIHwgY3VycmVuY3k6J0JSTCcgfX1cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtMTJcIiBzdHlsZT1cIm92ZXJmbG93OiBoaWRkZW47XCIgKm5nSWY9XCJzaG93SXRlbURldGFpbFwiPlxuICAgIDxsYy10aW1lbGluZS1pdGVtLWRldGFpbCAqbmdJZj1cInNob3dJdGVtRGV0YWlsXCI+PC9sYy10aW1lbGluZS1pdGVtLWRldGFpbD5cbiAgPC9kaXY+XG5cbiAgPCEtLSA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgc3R5bGU9XCJvdmVyZmxvdzogaGlkZGVuO1wiIEBzbGlkZVN0YXRlICpuZ0lmPVwic2hvd0l0ZW1EZXRhaWxcIj5cbiAgICA8YXBwLXRpbWVsaW5lLWl0ZW0tZGV0YWlsIEBzbGlkZVN0YXRlICpuZ0lmPVwic2hvd0l0ZW1EZXRhaWxcIj48L2FwcC10aW1lbGluZS1pdGVtLWRldGFpbD5cbiAgPC9kaXY+IC0tPlxuXG48L2Rpdj5cbmAsXG4gIC8vIGFuaW1hdGlvbnM6IFsgc2xpZGVTdGF0ZVRyaWdnZXIsIG1hcmtlZFRyaWdnZXIgXVxufSlcbmV4cG9ydCBjbGFzcyBUaW1lbGluZUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBfbW92aW1lbnRhdGlvbkl0ZW06IGFueTtcbiAgc2hvd0l0ZW1EZXRhaWw6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaG93SXRlbURldGFpbCA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgbW92aW1lbnRhdGlvbih2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fbW92aW1lbnRhdGlvbkl0ZW0gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBtb3ZpbWVudGF0aW9uVHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbS5tb3ZlbWVudFR5cGU7XG4gIH1cblxuICBnZXQgZ2V0TW92aW1lbnRhdGlvbk5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRNb3ZpbWVudGF0aW9uTmFtZVZhbGlkYXRpb24oKTtcbiAgfVxuXG4gIGdldCBnZXRNb3ZpbWVudGF0aW9uVmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbW92aW1lbnRhdGlvbkl0ZW0ubW92ZW1lbnRWYWx1ZTtcbiAgfVxuXG4gIGdldE1vdmltZW50YXRpb25OYW1lVmFsaWRhdGlvbigpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbS5tb3ZlbWVudFR5cGUgPT09ICdyZXNjdWUnICYmIHRoaXMuX21vdmltZW50YXRpb25JdGVtLm1vdmVtZW50Q2F0ZWdvcnkgPT09ICdwcm9kdWN0Jykge1xuICAgICAgcmV0dXJuICdSZXNnYXRlIGRlIFByb2R1dG8nO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fbW92aW1lbnRhdGlvbkl0ZW0ubW92ZW1lbnRUeXBlID09PSAnY3JlZGl0JyAmJiB0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbS5tb3ZlbWVudENhdGVnb3J5ID09PSAncHJvZHVjdCcpIHtcbiAgICAgIHJldHVybiAnQ3LDg8KpZGl0byBkZSBQcm9kdXRvJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX21vdmltZW50YXRpb25JdGVtLm1vdmVtZW50VHlwZSA9PT0gJ2NyZWRpdCcgJiYgdGhpcy5fbW92aW1lbnRhdGlvbkl0ZW0ubW92ZW1lbnRDYXRlZ29yeSA9PT0gJ3F1b3RhJykge1xuICAgICAgcmV0dXJuICdDcsODwqlkaXRvIGRlIENvdGEnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fbW92aW1lbnRhdGlvbkl0ZW0ubW92ZW1lbnRUeXBlID09PSAncmVzY3VlJyAmJiB0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbS5tb3ZlbWVudENhdGVnb3J5ID09PSAncXVvdGEnKSB7XG4gICAgICByZXR1cm4gJ1Jlc2dhdGUgZGUgQ290YSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnbnVsbyc7XG4gICAgfVxuICB9XG5cbiAgYWN0aW9uU2hvd0l0ZW1EZXRhaWwoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93SXRlbURldGFpbCA9ICF0aGlzLnNob3dJdGVtRGV0YWlsO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYy10aW1lbGluZS10YWJzJyxcbiAgdGVtcGxhdGU6IGA8bWF0LXRhYi1ncm91cD5cbiAgPG1hdC10YWIgbGFiZWw9XCJUdWRvXCI+XG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZGF5IG9mIGRheXNBc0xpbmVJdGVtXCI+XG4gICAgICA8bWF0LWNoaXAtbGlzdD5cbiAgICAgICAgPG1hdC1jaGlwPnt7IGRheS5sYWJlbCB9fTwvbWF0LWNoaXA+XG4gICAgICA8L21hdC1jaGlwLWxpc3Q+XG4gICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtbGluZVwiPlxuICAgICAgICA8bGMtdGltZWxpbmUtaXRlbVxuICAgICAgICAgICpuZ0Zvcj1cImxldCBtb3ZlbWVudCBvZiBkYXkubW92ZW1lbnRcIlxuICAgICAgICAgIFttb3ZpbWVudGF0aW9uXT1cIm1vdmVtZW50XCJcbiAgICAgICAgPjwvbGMtdGltZWxpbmUtaXRlbT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiQ3LDg8KpZGl0b1wiIGNsYXNzPVwiY2VudGVyXCI+IDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJSZXNnYXRlc1wiPiA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRnV0dXJvXCI+PC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgVGltZWxpbmVUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBkYXlzQXNMaW5lSXRlbTogYW55W10gPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnSG9qZScsXG4gICAgICAgIG1vdmVtZW50OiBbXG4gICAgICAgICAgeyBtb3ZlbWVudFR5cGU6ICdjcmVkaXQnLCBtb3ZlbWVudENhdGVnb3J5OiAncHJvZHVjdCcsIG1vdmVtZW50VmFsdWU6IDM5MDAgfSxcbiAgICAgICAgICB7IG1vdmVtZW50VHlwZTogJ2NyZWRpdCcsIG1vdmVtZW50Q2F0ZWdvcnk6ICdxdW90YScsIG1vdmVtZW50VmFsdWU6IDkwMzAwIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnMjYgZGUgT3V0dWJybycsXG4gICAgICAgIG1vdmVtZW50OiBbXG4gICAgICAgICAgeyBtb3ZlbWVudFR5cGU6ICdyZXNjdWUnLCBtb3ZlbWVudENhdGVnb3J5OiAncXVvdGEnLCBtb3ZlbWVudFZhbHVlOiA4OTAwMDAgfSxcbiAgICAgICAgXVxuICAgICAgIH0sXG4gICAgICAge1xuICAgICAgICBsYWJlbDogJzI1IGRlIE91dHVicm8nLFxuICAgICAgICBtb3ZlbWVudDogW1xuICAgICAgICAgIHsgbW92ZW1lbnRUeXBlOiAnY3JlZGl0JywgbW92ZW1lbnRDYXRlZ29yeTogJ3F1b3RhJywgbW92ZW1lbnRWYWx1ZTogNzg1NzYzIH0sXG4gICAgICAgICAgeyBtb3ZlbWVudFR5cGU6ICdjcmVkaXQnLCBtb3ZlbWVudENhdGVnb3J5OiAncHJvZHVjdCcsIG1vdmVtZW50VmFsdWU6IDU0MDA5IH0sXG4gICAgICAgIF1cbiAgICAgICB9LFxuICAgICAgIHtcbiAgICAgICAgbGFiZWw6ICcyNiBkZSBPdXR1YnJvJyxcbiAgICAgICAgbW92ZW1lbnQ6IFtcbiAgICAgICAgICB7IG1vdmVtZW50VHlwZTogJ3Jlc2N1ZScsIG1vdmVtZW50Q2F0ZWdvcnk6ICdwcm9kdWN0JywgbW92ZW1lbnRWYWx1ZTogNzY1NDg5MDAgfSxcbiAgICAgICAgXVxuICAgICAgIH0sXG4gIF07XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGMtZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgPGRpdiAoY2xpY2spPVwicGlja2VyLm9wZW4oKVwiPlxuICA8bGFiZWw+e3sgbGFiZWxUZXh0VmlldyB9fTwvbGFiZWw+XG4gIDxpbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIj5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXIgaWQ9XCJkYXRlUGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIF9sYWJlbFRleHQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBASW5wdXQoKSBzZXQgbGFiZWxUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYWJlbFRleHQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBsYWJlbFRleHRWaWV3KCkge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbFRleHQ7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xjLWZpbHRlci1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIj5cbiAgPG1hdC1pY29uPmZpbHRlcl9saXN0PC9tYXQtaWNvbj4ge3sgZmlsdGVyVGV4dCB9fSA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfZG93bjwvbWF0LWljb24+XG48L2J1dHRvbj5cbjxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIiBbY2xhc3NdPVwiJ2ZpbHRlci1zZWxlY3QnXCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwiZmlsdGVyRXZlbnQoJGV2ZW50KVwiIFt2YWx1ZV09XCInUHJvZHV0b3MnXCI+UHJvZHV0b3M8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJmaWx0ZXJFdmVudCgkZXZlbnQpXCIgW3ZhbHVlXT1cIidDb3RhcydcIj5Db3RhczwvYnV0dG9uPlxuICA8IS0tIDxidXR0b24gbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwiZmlsdGVyRXZlbnQoJGV2ZW50KVwiIFt2YWx1ZV09XCInUHJvZHV0b3MgZSBDb3RhcydcIj5Qcm9kdXRvcyBlIENvdGFzPC9idXR0b24+IC0tPlxuPC9tYXQtbWVudT5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBPdXRwdXQoKSB0aHJvd0ZpbHRlclNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZmlsdGVyU2VsZWN0ZWQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZmlsdGVyRXZlbnQoZXZlbnQ6IGFueSkge1xuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUpIHtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLnRocm93RmlsdGVyU2VsZWN0ZWQuZW1pdCh0aGlzLmZpbHRlclNlbGVjdGVkKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZmlsdGVyVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJTZWxlY3RlZCA/IHRoaXMuZmlsdGVyU2VsZWN0ZWQgOiAnRmlsdHJhcic7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcikgeyB9XG5cbiAgcHVibGljIG9wZW5TbmFja0JhcihtZXNzYWdlOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nID0gJ09LJywgZHVyYXRpb246IG51bWJlciA9IDMwMDApIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgYWN0aW9uLCB7XG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBwYW5lbENsYXNzOiBbJ21hdC1zbmFjay1iYXItY29udGFpbmVyJ11cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGMtZGlhbG9nLWFsZXJ0JyxcbiAgdGVtcGxhdGU6IGA8aDIgbWF0LWRpYWxvZy10aXRsZT57e3RpdGxlfX08L2gyPlxuXG48bWF0LWRpYWxvZy1jb250ZW50PlxuICA8cCBjbGFzcz1cInRleHQtY2VudGVyXCJbaW5uZXJIVE1MXT1cIm1lc3NhZ2VcIj48L3A+XG48L21hdC1kaWFsb2ctY29udGVudD5cblxuPG1hdC1kaWFsb2ctYWN0aW9ucz5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoKVwiPk9LPC9idXR0b24+XG48L21hdC1kaWFsb2ctYWN0aW9ucz5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyB0aXRsZTtcbiAgcHVibGljIG1lc3NhZ2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEaWFsb2dBbGVydENvbXBvbmVudD4pIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaWFsb2dBbGVydENvbXBvbmVudCB9IGZyb20gJy4uL2RpYWxvZy1hbGVydC9kaWFsb2ctYWxlcnQuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTWF0RGlhbG9nQ29uZmlnLCBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0FsZXJ0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24pIHtcblxuICB9XG5cbiAgcHVibGljIG9wZW5BbGVydERpYWxvZyh0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkaWFsb2dDb25maWcgPSBuZXcgTWF0RGlhbG9nQ29uZmlnKCk7XG5cbiAgICBkaWFsb2dDb25maWcuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcbiAgICBkaWFsb2dDb25maWcuYXV0b0ZvY3VzID0gdHJ1ZTtcblxuICAgIGxldCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEaWFsb2dBbGVydENvbXBvbmVudD47XG4gICAgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dBbGVydENvbXBvbmVudCwgZGlhbG9nQ29uZmlnKTtcblxuICAgIGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS50aXRsZSA9IHRpdGxlO1xuICAgIGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuQWxlcnREaWFsb2dBY3Rpb24odGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZGlhbG9nQ29uZmlnID0gbmV3IE1hdERpYWxvZ0NvbmZpZygpO1xuXG4gICAgZGlhbG9nQ29uZmlnLmRpc2FibGVDbG9zZSA9IHRydWU7XG4gICAgZGlhbG9nQ29uZmlnLmF1dG9Gb2N1cyA9IHRydWU7XG5cbiAgICBsZXQgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGlhbG9nQWxlcnRDb21wb25lbnQ+O1xuICAgIGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQWxlcnRDb21wb25lbnQsIGRpYWxvZ0NvbmZpZyk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0cyA9PiB7XG4gICAgICB0aGlzLl9sb2NhdGlvbi5iYWNrKCk7XG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UudGl0bGUgPSB0aXRsZTtcbiAgICBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0xjRGV2a2l0Q29tcG9uZW50IH0gZnJvbSAnLi9uZy1sYy1kZXZraXQuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2dyZXNzQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7XG4gIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICBNYXRCdXR0b25Nb2R1bGUsXG4gIE1hdFRhYnNNb2R1bGUsXG4gIE1hdENoaXBzTW9kdWxlLFxuICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICBNYXRNZW51TW9kdWxlLFxuICBNYXRJY29uTW9kdWxlLFxuICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgTWF0RGlhbG9nTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRpbWVsaW5lSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vdGltZWxpbmUtaXRlbS1kZXRhaWwvdGltZWxpbmUtaXRlbS1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbWVsaW5lSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdGltZWxpbmUtaXRlbS90aW1lbGluZS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lbGluZVRhYnNDb21wb25lbnQgfSBmcm9tICcuL3RpbWVsaW5lLXRhYnMvdGltZWxpbmUtdGFicy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci1zZWxlY3QvZmlsdGVyLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU25hY2tCYXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zbmFjay1iYXIuc2VydmljZSc7XG5pbXBvcnQgeyBEaWFsb2dBbGVydENvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLWFsZXJ0L2RpYWxvZy1hbGVydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kaWFsb2ctYWxlcnQuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5nTGNEZXZraXRDb21wb25lbnQsXG4gICAgUHJvZ3Jlc3NCYXJDb21wb25lbnQsXG4gICAgVGltZWxpbmVJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgIFRpbWVsaW5lSXRlbUNvbXBvbmVudCxcbiAgICBUaW1lbGluZVRhYnNDb21wb25lbnQsXG4gICAgRGF0ZXBpY2tlckNvbXBvbmVudCxcbiAgICBGaWx0ZXJTZWxlY3RDb21wb25lbnQsXG4gICAgRGlhbG9nQWxlcnRDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5nTGNEZXZraXRDb21wb25lbnQsXG4gICAgUHJvZ3Jlc3NCYXJDb21wb25lbnQsXG4gICAgVGltZWxpbmVJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgIFRpbWVsaW5lSXRlbUNvbXBvbmVudCxcbiAgICBUaW1lbGluZVRhYnNDb21wb25lbnQsXG4gICAgRGF0ZXBpY2tlckNvbXBvbmVudCxcbiAgICBGaWx0ZXJTZWxlY3RDb21wb25lbnQsXG4gICAgRGlhbG9nQWxlcnRDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbU25hY2tCYXJTZXJ2aWNlLCBEaWFsb2dBbGVydFNlcnZpY2VdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtEaWFsb2dBbGVydENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmdMY0RldmtpdE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJFdmVudEVtaXR0ZXIiLCJPdXRwdXQiLCJNYXRTbmFja0JhciIsIk1hdERpYWxvZ1JlZiIsIk1hdERpYWxvZ0NvbmZpZyIsIk1hdERpYWxvZyIsIkxvY2F0aW9uIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJNYXRQcm9ncmVzc0Jhck1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdFRhYnNNb2R1bGUiLCJNYXRDaGlwc01vZHVsZSIsIk1hdERhdGVwaWNrZXJNb2R1bGUiLCJNYXRNZW51TW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdFNuYWNrQmFyTW9kdWxlIiwiTWF0RGlhbG9nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OztnQ0FKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIsc0NBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsUUFBUSxFQUFFLG9EQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7O2tDQVZEOzs7Ozs7O0FDQUE7UUErRUU7eUJBSFEsT0FBTzsyQkFDTCxTQUFTO1NBRUY7Ozs7UUFFakIsdUNBQVE7OztZQUFSO2FBQ0M7UUFFRCxzQkFBYSw4Q0FBWTs7OztnQkFBekIsVUFBMEIsS0FBYTtnQkFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7YUFDNUI7OztXQUFBO1FBRUQsc0JBQWEsa0RBQWdCOzs7Z0JBd0I3QjtnQkFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzthQUMvQjs7OztnQkExQkQsVUFBOEIsS0FBYTtnQkFDekMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQzthQUNoQzs7O1dBQUE7UUFFRCxz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