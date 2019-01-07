import { Injectable, Component, NgModule, Input, EventEmitter, Output, defineInjectable, inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MatDialogConfig, MatDialog, MatProgressBarModule, MatButtonModule, MatTabsModule, MatChipsModule, MatDatepickerModule, MatMenuModule, MatIconModule, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { MatSnackBar as MatSnackBar$1 } from '@angular/material/snack-bar';
import { Location, CommonModule } from '@angular/common';
import { MatDialog as MatDialog$1 } from '@angular/material/dialog';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgLcDevkitService {
    constructor() { }
}
NgLcDevkitService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
NgLcDevkitService.ctorParameters = () => [];
/** @nocollapse */ NgLcDevkitService.ngInjectableDef = defineInjectable({ factory: function NgLcDevkitService_Factory() { return new NgLcDevkitService(); }, token: NgLcDevkitService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgLcDevkitComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgLcDevkitComponent.decorators = [
    { type: Component, args: [{
                selector: 'lc-ng-lc-devkit',
                template: `
    <p>
      ng-lc-devkit works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
NgLcDevkitComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ProgressBarComponent {
    constructor() {
        this.quota = 'quota';
        this.product = 'product';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set progressType(value) {
        this._progressType = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set progressValueOne(value) {
        this._progressValueOne = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set iconTop(value) {
        this._progressIcon = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set progressValueTwo(value) {
        this._progressValueTwo = value;
    }
    /**
     * @return {?}
     */
    get typeName() {
        return this._progressType === 'quota' ? 'Cotas' : 'Produtos';
    }
    /**
     * @return {?}
     */
    get getFirstBottomLabel() {
        return this._progressType === 'quota' ? 'Valor Resgatado' : 'Presenteados';
    }
    /**
     * @return {?}
     */
    get getSecondBottomLabel() {
        return this._progressType === 'quota' ? 'Valor Presenteado' : 'Adicionados';
    }
    /**
     * @return {?}
     */
    get progressValueOne() {
        return this._progressValueOne;
    }
    /**
     * @return {?}
     */
    get progressValueTwo() {
        return this._progressValueTwo;
    }
    /**
     * @return {?}
     */
    get progressIconImage() {
        return this._progressIcon;
    }
    /**
     * @return {?}
     */
    get progressIconSrc() {
        return this._progressType === 'quota' ? 'assets/images/ico-plane-black.svg' : 'assets/images/ico-product.svg';
    }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'lc-progress-bar',
                template: `<div>
  <div class="icon" *ngIf="progressIconImage">
    <figure>
      <img [src]="progressIconSrc" alt="">
    </figure>
    <p>
      {{ typeName }}
    </p>
  </div>
  <div class="texts">
    <span *ngIf="_progressType !== quota" [ngClass]="
      {
      'green' : _progressType === product,
      'pink' : _progressType === quota
      }">{{
      progressValueOne }}</span>
    <span *ngIf="_progressType !== quota">{{ progressValueTwo }}</span>

    <span *ngIf="_progressType === quota" [ngClass]="
      {
      'green' : _progressType === product,
      'pink' : _progressType === quota
      }">{{
      progressValueOne | currency:'BRL' }}
    </span>
    <span *ngIf="_progressType === 'quota'">{{ progressValueTwo | currency:'BRL' }}
    </span>
  </div>
  <mat-progress-bar mode="determinate" value="40" [ngClass]="
    {
    'green' : _progressType === product,
    'pink' : _progressType === quota
    }"></mat-progress-bar>
  <div class="texts">
    <span class="bottom" [ngClass]="
      {
      'green' : _progressType === product,
      'quota' : _progressType === quota
      }">{{
      getFirstBottomLabel }}</span>
    <span class="bottom">{{ getSecondBottomLabel }}</span>
  </div>
</div>


<div class="second-progress-bar">
  <div class="texts">
    <span *ngIf="_progressType !== quota" class="blue">{{
      progressValueOne }}</span>
    <span *ngIf="_progressType !== quota">{{ progressValueTwo }}</span>

    <span *ngIf="_progressType === quota" class="blue">{{
      progressValueOne | currency:'BRL' }}
    </span>
    <span *ngIf="_progressType === quota">{{ progressValueTwo | currency:'BRL' }}
    </span>
  </div>
  <mat-progress-bar mode="determinate" value="40" class="blue"></mat-progress-bar>
  <div class="texts">
    <span class="bottom blue">{{
      getFirstBottomLabel }}</span>
    <span class="bottom">{{ getSecondBottomLabel }}</span>
  </div>
</div>
`
            },] },
];
/** @nocollapse */
ProgressBarComponent.ctorParameters = () => [];
ProgressBarComponent.propDecorators = {
    progressType: [{ type: Input }],
    progressValueOne: [{ type: Input }],
    iconTop: [{ type: Input }],
    progressValueTwo: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TimelineItemDetailComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TimelineItemDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'lc-timeline-item-detail',
                template: `<div class="row">
  <div class="col-auto">
    <div class="img-item"></div>
  </div>
  <div class="col infos-item">
    <p>
        Kitchenaid Batedeira Planetária 6 vel. prata 110v - SKL9999999999
    </p>
    <span>
        Convidado: Ana Luíza Souto
    </span>
    <button mat-raised-button>Presentear um casal</button>
  </div>
</div>`,
            },] },
];
/** @nocollapse */
TimelineItemDetailComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TimelineItemComponent {
    constructor() {
        this.showItemDetail = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set movimentation(value) {
        this._movimentationItem = value;
    }
    /**
     * @return {?}
     */
    get movimentationType() {
        return this._movimentationItem.movementType;
    }
    /**
     * @return {?}
     */
    get getMovimentationName() {
        return this.getMovimentationNameValidation();
    }
    /**
     * @return {?}
     */
    get getMovimentationValue() {
        return this._movimentationItem.movementValue;
    }
    /**
     * @return {?}
     */
    getMovimentationNameValidation() {
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
    }
    /**
     * @return {?}
     */
    actionShowItemDetail() {
        this.showItemDetail = !this.showItemDetail;
    }
}
TimelineItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'lc-timeline-item',
                template: `<div class="row">
  <div class="button-action col-auto">
    <button
      mat-raised-button
      class="fab-more"
      [ngClass]="
        { 'rescue': movimentationType === 'rescue' }
      "
      (click)="actionShowItemDetail()"
      >
      <span> {{ movimentationType === 'rescue' ? '-' : '+' }} </span>
    </button>
  </div>

  <div class="text-content col-auto" (click)="actionShowItemDetail()">
    <p [ngClass]="{ 'rescue': movimentationType === 'rescue' }">{{ getMovimentationName }}</p>
    <span>
      Kitchenaid Batedeira Planetária 6 velocidades
    </span>
  </div>

  <div class="col-auto value">
    <span [ngClass]="{ 'rescue': movimentationType === 'rescue' }">
      {{ movimentationType === 'rescue' ? '-'  : '+'}} {{ getMovimentationValue | currency:'BRL' }}
    </span>
  </div>

  <div class="col-12" style="overflow: hidden;" *ngIf="showItemDetail">
    <lc-timeline-item-detail *ngIf="showItemDetail"></lc-timeline-item-detail>
  </div>

  <!-- <div class="col-12" style="overflow: hidden;" @slideState *ngIf="showItemDetail">
    <app-timeline-item-detail @slideState *ngIf="showItemDetail"></app-timeline-item-detail>
  </div> -->

</div>
`,
            },] },
];
/** @nocollapse */
TimelineItemComponent.ctorParameters = () => [];
TimelineItemComponent.propDecorators = {
    movimentation: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TimelineTabsComponent {
    constructor() {
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
    ngOnInit() {
    }
}
TimelineTabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lc-timeline-tabs',
                template: `<mat-tab-group>
  <mat-tab label="Tudo">
    <div *ngFor="let day of daysAsLineItem">
      <mat-chip-list>
        <mat-chip>{{ day.label }}</mat-chip>
      </mat-chip-list>
      <div class="timeline-line">
        <lc-timeline-item
          *ngFor="let movement of day.movement"
          [movimentation]="movement"
        ></lc-timeline-item>
      </div>
    </div>
  </mat-tab>
  <mat-tab label="Crédito" class="center"> </mat-tab>
  <mat-tab label="Resgates"> </mat-tab>
  <mat-tab label="Futuro"></mat-tab>
</mat-tab-group>
`,
            },] },
];
/** @nocollapse */
TimelineTabsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DatepickerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set labelText(value) {
        this._labelText = value;
    }
    /**
     * @return {?}
     */
    get labelTextView() {
        return this._labelText;
    }
}
DatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'lc-datepicker',
                template: `<div (click)="picker.open()">
  <label>{{ labelTextView }}</label>
  <input [matDatepicker]="picker">
  <mat-datepicker #picker id="datePicker"></mat-datepicker>
</div>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
DatepickerComponent.ctorParameters = () => [];
DatepickerComponent.propDecorators = {
    labelText: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FilterSelectComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SnackBarService {
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
/** @nocollapse */ SnackBarService.ngInjectableDef = defineInjectable({ factory: function SnackBarService_Factory() { return new SnackBarService(inject(MatSnackBar$1)); }, token: SnackBarService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DialogAlertComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DialogAlertService {
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
/** @nocollapse */ DialogAlertService.ngInjectableDef = defineInjectable({ factory: function DialogAlertService_Factory() { return new DialogAlertService(inject(MatDialog$1), inject(Location)); }, token: DialogAlertService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgLcDevkitModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgLcDevkitService, NgLcDevkitComponent, NgLcDevkitModule, ProgressBarComponent, TimelineTabsComponent, TimelineItemComponent, TimelineItemDetailComponent, DatepickerComponent, FilterSelectComponent, SnackBarService, DialogAlertService, DialogAlertComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbGMtZGV2a2l0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1sYy1kZXZraXQvbGliL25nLWxjLWRldmtpdC5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1sYy1kZXZraXQvbGliL25nLWxjLWRldmtpdC5jb21wb25lbnQudHMiLCJuZzovL25nLWxjLWRldmtpdC9saWIvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQudHMiLCJuZzovL25nLWxjLWRldmtpdC9saWIvdGltZWxpbmUtaXRlbS1kZXRhaWwvdGltZWxpbmUtaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1sYy1kZXZraXQvbGliL3RpbWVsaW5lLWl0ZW0vdGltZWxpbmUtaXRlbS5jb21wb25lbnQudHMiLCJuZzovL25nLWxjLWRldmtpdC9saWIvdGltZWxpbmUtdGFicy90aW1lbGluZS10YWJzLmNvbXBvbmVudC50cyIsIm5nOi8vbmctbGMtZGV2a2l0L2xpYi9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1sYy1kZXZraXQvbGliL2ZpbHRlci1zZWxlY3QvZmlsdGVyLXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL25nLWxjLWRldmtpdC9saWIvc2VydmljZXMvc25hY2stYmFyLnNlcnZpY2UudHMiLCJuZzovL25nLWxjLWRldmtpdC9saWIvZGlhbG9nLWFsZXJ0L2RpYWxvZy1hbGVydC5jb21wb25lbnQudHMiLCJuZzovL25nLWxjLWRldmtpdC9saWIvc2VydmljZXMvZGlhbG9nLWFsZXJ0LnNlcnZpY2UudHMiLCJuZzovL25nLWxjLWRldmtpdC9saWIvbmctbGMtZGV2a2l0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nTGNEZXZraXRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGMtbmctbGMtZGV2a2l0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG5nLWxjLWRldmtpdCB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdMY0RldmtpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGMtcHJvZ3Jlc3MtYmFyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2PlxuICA8ZGl2IGNsYXNzPVwiaWNvblwiICpuZ0lmPVwicHJvZ3Jlc3NJY29uSW1hZ2VcIj5cbiAgICA8ZmlndXJlPlxuICAgICAgPGltZyBbc3JjXT1cInByb2dyZXNzSWNvblNyY1wiIGFsdD1cIlwiPlxuICAgIDwvZmlndXJlPlxuICAgIDxwPlxuICAgICAge3sgdHlwZU5hbWUgfX1cbiAgICA8L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidGV4dHNcIj5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgIT09IHF1b3RhXCIgW25nQ2xhc3NdPVwiXG4gICAgICB7XG4gICAgICAnZ3JlZW4nIDogX3Byb2dyZXNzVHlwZSA9PT0gcHJvZHVjdCxcbiAgICAgICdwaW5rJyA6IF9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXG4gICAgICB9XCI+e3tcbiAgICAgIHByb2dyZXNzVmFsdWVPbmUgfX08L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJfcHJvZ3Jlc3NUeXBlICE9PSBxdW90YVwiPnt7IHByb2dyZXNzVmFsdWVUd28gfX08L3NwYW4+XG5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXCIgW25nQ2xhc3NdPVwiXG4gICAgICB7XG4gICAgICAnZ3JlZW4nIDogX3Byb2dyZXNzVHlwZSA9PT0gcHJvZHVjdCxcbiAgICAgICdwaW5rJyA6IF9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXG4gICAgICB9XCI+e3tcbiAgICAgIHByb2dyZXNzVmFsdWVPbmUgfCBjdXJyZW5jeTonQlJMJyB9fVxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgPT09ICdxdW90YSdcIj57eyBwcm9ncmVzc1ZhbHVlVHdvIHwgY3VycmVuY3k6J0JSTCcgfX1cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuICA8bWF0LXByb2dyZXNzLWJhciBtb2RlPVwiZGV0ZXJtaW5hdGVcIiB2YWx1ZT1cIjQwXCIgW25nQ2xhc3NdPVwiXG4gICAge1xuICAgICdncmVlbicgOiBfcHJvZ3Jlc3NUeXBlID09PSBwcm9kdWN0LFxuICAgICdwaW5rJyA6IF9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXG4gICAgfVwiPjwvbWF0LXByb2dyZXNzLWJhcj5cbiAgPGRpdiBjbGFzcz1cInRleHRzXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJib3R0b21cIiBbbmdDbGFzc109XCJcbiAgICAgIHtcbiAgICAgICdncmVlbicgOiBfcHJvZ3Jlc3NUeXBlID09PSBwcm9kdWN0LFxuICAgICAgJ3F1b3RhJyA6IF9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXG4gICAgICB9XCI+e3tcbiAgICAgIGdldEZpcnN0Qm90dG9tTGFiZWwgfX08L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJib3R0b21cIj57eyBnZXRTZWNvbmRCb3R0b21MYWJlbCB9fTwvc3Bhbj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuXG48ZGl2IGNsYXNzPVwic2Vjb25kLXByb2dyZXNzLWJhclwiPlxuICA8ZGl2IGNsYXNzPVwidGV4dHNcIj5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgIT09IHF1b3RhXCIgY2xhc3M9XCJibHVlXCI+e3tcbiAgICAgIHByb2dyZXNzVmFsdWVPbmUgfX08L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJfcHJvZ3Jlc3NUeXBlICE9PSBxdW90YVwiPnt7IHByb2dyZXNzVmFsdWVUd28gfX08L3NwYW4+XG5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXCIgY2xhc3M9XCJibHVlXCI+e3tcbiAgICAgIHByb2dyZXNzVmFsdWVPbmUgfCBjdXJyZW5jeTonQlJMJyB9fVxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgPT09IHF1b3RhXCI+e3sgcHJvZ3Jlc3NWYWx1ZVR3byB8IGN1cnJlbmN5OidCUkwnIH19XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgPG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImRldGVybWluYXRlXCIgdmFsdWU9XCI0MFwiIGNsYXNzPVwiYmx1ZVwiPjwvbWF0LXByb2dyZXNzLWJhcj5cbiAgPGRpdiBjbGFzcz1cInRleHRzXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJib3R0b20gYmx1ZVwiPnt7XG4gICAgICBnZXRGaXJzdEJvdHRvbUxhYmVsIH19PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiYm90dG9tXCI+e3sgZ2V0U2Vjb25kQm90dG9tTGFiZWwgfX08L3NwYW4+XG4gIDwvZGl2PlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgX3Byb2dyZXNzVHlwZTogc3RyaW5nO1xuICBfcHJvZ3Jlc3NWYWx1ZU9uZTogbnVtYmVyO1xuICBfcHJvZ3Jlc3NWYWx1ZVR3bzogbnVtYmVyO1xuICBfcHJvZ3Jlc3NJY29uOiBib29sZWFuO1xuXG4gIHF1b3RhID0gJ3F1b3RhJztcbiAgcHJvZHVjdCA9ICdwcm9kdWN0JztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHByb2dyZXNzVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvZ3Jlc3NUeXBlID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgcHJvZ3Jlc3NWYWx1ZU9uZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcHJvZ3Jlc3NWYWx1ZU9uZSA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGljb25Ub3AodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9wcm9ncmVzc0ljb24gPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBwcm9ncmVzc1ZhbHVlVHdvKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wcm9ncmVzc1ZhbHVlVHdvID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdHlwZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzVHlwZSA9PT0gJ3F1b3RhJyA/ICdDb3RhcycgOiAnUHJvZHV0b3MnO1xuICB9XG5cbiAgZ2V0IGdldEZpcnN0Qm90dG9tTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzVHlwZSA9PT0gJ3F1b3RhJyA/ICdWYWxvciBSZXNnYXRhZG8nIDogJ1ByZXNlbnRlYWRvcyc7XG4gIH1cblxuICBnZXQgZ2V0U2Vjb25kQm90dG9tTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzVHlwZSA9PT0gJ3F1b3RhJyA/ICdWYWxvciBQcmVzZW50ZWFkbycgOiAnQWRpY2lvbmFkb3MnO1xuICB9XG5cbiAgZ2V0IHByb2dyZXNzVmFsdWVPbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzVmFsdWVPbmU7XG4gIH1cblxuICBnZXQgcHJvZ3Jlc3NWYWx1ZVR3bygpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NWYWx1ZVR3bztcbiAgfVxuXG4gIGdldCBwcm9ncmVzc0ljb25JbWFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NJY29uO1xuICB9XG5cbiAgZ2V0IHByb2dyZXNzSWNvblNyYygpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NUeXBlID09PSAncXVvdGEnID8gJ2Fzc2V0cy9pbWFnZXMvaWNvLXBsYW5lLWJsYWNrLnN2ZycgOiAnYXNzZXRzL2ltYWdlcy9pY28tcHJvZHVjdC5zdmcnXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGMtdGltZWxpbmUtaXRlbS1kZXRhaWwnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC1hdXRvXCI+XG4gICAgPGRpdiBjbGFzcz1cImltZy1pdGVtXCI+PC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sIGluZm9zLWl0ZW1cIj5cbiAgICA8cD5cbiAgICAgICAgS2l0Y2hlbmFpZCBCYXRlZGVpcmEgUGxhbmV0w4PCoXJpYSA2IHZlbC4gcHJhdGEgMTEwdiAtIFNLTDk5OTk5OTk5OTlcbiAgICA8L3A+XG4gICAgPHNwYW4+XG4gICAgICAgIENvbnZpZGFkbzogQW5hIEx1w4PCrXphIFNvdXRvXG4gICAgPC9zcGFuPlxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24+UHJlc2VudGVhciB1bSBjYXNhbDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PmAsXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lSXRlbURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IHNsaWRlU3RhdGVUcmlnZ2VyLCBtYXJrZWRUcmlnZ2VyIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xjLXRpbWVsaW5lLWl0ZW0nLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImJ1dHRvbi1hY3Rpb24gY29sLWF1dG9cIj5cbiAgICA8YnV0dG9uXG4gICAgICBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgY2xhc3M9XCJmYWItbW9yZVwiXG4gICAgICBbbmdDbGFzc109XCJcbiAgICAgICAgeyAncmVzY3VlJzogbW92aW1lbnRhdGlvblR5cGUgPT09ICdyZXNjdWUnIH1cbiAgICAgIFwiXG4gICAgICAoY2xpY2spPVwiYWN0aW9uU2hvd0l0ZW1EZXRhaWwoKVwiXG4gICAgICA+XG4gICAgICA8c3Bhbj4ge3sgbW92aW1lbnRhdGlvblR5cGUgPT09ICdyZXNjdWUnID8gJy0nIDogJysnIH19IDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInRleHQtY29udGVudCBjb2wtYXV0b1wiIChjbGljayk9XCJhY3Rpb25TaG93SXRlbURldGFpbCgpXCI+XG4gICAgPHAgW25nQ2xhc3NdPVwieyAncmVzY3VlJzogbW92aW1lbnRhdGlvblR5cGUgPT09ICdyZXNjdWUnIH1cIj57eyBnZXRNb3ZpbWVudGF0aW9uTmFtZSB9fTwvcD5cbiAgICA8c3Bhbj5cbiAgICAgIEtpdGNoZW5haWQgQmF0ZWRlaXJhIFBsYW5ldMODwqFyaWEgNiB2ZWxvY2lkYWRlc1xuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIHZhbHVlXCI+XG4gICAgPHNwYW4gW25nQ2xhc3NdPVwieyAncmVzY3VlJzogbW92aW1lbnRhdGlvblR5cGUgPT09ICdyZXNjdWUnIH1cIj5cbiAgICAgIHt7IG1vdmltZW50YXRpb25UeXBlID09PSAncmVzY3VlJyA/ICctJyAgOiAnKyd9fSB7eyBnZXRNb3ZpbWVudGF0aW9uVmFsdWUgfCBjdXJyZW5jeTonQlJMJyB9fVxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC0xMlwiIHN0eWxlPVwib3ZlcmZsb3c6IGhpZGRlbjtcIiAqbmdJZj1cInNob3dJdGVtRGV0YWlsXCI+XG4gICAgPGxjLXRpbWVsaW5lLWl0ZW0tZGV0YWlsICpuZ0lmPVwic2hvd0l0ZW1EZXRhaWxcIj48L2xjLXRpbWVsaW5lLWl0ZW0tZGV0YWlsPlxuICA8L2Rpdj5cblxuICA8IS0tIDxkaXYgY2xhc3M9XCJjb2wtMTJcIiBzdHlsZT1cIm92ZXJmbG93OiBoaWRkZW47XCIgQHNsaWRlU3RhdGUgKm5nSWY9XCJzaG93SXRlbURldGFpbFwiPlxuICAgIDxhcHAtdGltZWxpbmUtaXRlbS1kZXRhaWwgQHNsaWRlU3RhdGUgKm5nSWY9XCJzaG93SXRlbURldGFpbFwiPjwvYXBwLXRpbWVsaW5lLWl0ZW0tZGV0YWlsPlxuICA8L2Rpdj4gLS0+XG5cbjwvZGl2PlxuYCxcbiAgLy8gYW5pbWF0aW9uczogWyBzbGlkZVN0YXRlVHJpZ2dlciwgbWFya2VkVHJpZ2dlciBdXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIF9tb3ZpbWVudGF0aW9uSXRlbTogYW55O1xuICBzaG93SXRlbURldGFpbDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNob3dJdGVtRGV0YWlsID0gZmFsc2U7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBtb3ZpbWVudGF0aW9uKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG1vdmltZW50YXRpb25UeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vdmltZW50YXRpb25JdGVtLm1vdmVtZW50VHlwZTtcbiAgfVxuXG4gIGdldCBnZXRNb3ZpbWVudGF0aW9uTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldE1vdmltZW50YXRpb25OYW1lVmFsaWRhdGlvbigpO1xuICB9XG5cbiAgZ2V0IGdldE1vdmltZW50YXRpb25WYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbS5tb3ZlbWVudFZhbHVlO1xuICB9XG5cbiAgZ2V0TW92aW1lbnRhdGlvbk5hbWVWYWxpZGF0aW9uKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX21vdmltZW50YXRpb25JdGVtLm1vdmVtZW50VHlwZSA9PT0gJ3Jlc2N1ZScgJiYgdGhpcy5fbW92aW1lbnRhdGlvbkl0ZW0ubW92ZW1lbnRDYXRlZ29yeSA9PT0gJ3Byb2R1Y3QnKSB7XG4gICAgICByZXR1cm4gJ1Jlc2dhdGUgZGUgUHJvZHV0byc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbS5tb3ZlbWVudFR5cGUgPT09ICdjcmVkaXQnICYmIHRoaXMuX21vdmltZW50YXRpb25JdGVtLm1vdmVtZW50Q2F0ZWdvcnkgPT09ICdwcm9kdWN0Jykge1xuICAgICAgcmV0dXJuICdDcsODwqlkaXRvIGRlIFByb2R1dG8nO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fbW92aW1lbnRhdGlvbkl0ZW0ubW92ZW1lbnRUeXBlID09PSAnY3JlZGl0JyAmJiB0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbS5tb3ZlbWVudENhdGVnb3J5ID09PSAncXVvdGEnKSB7XG4gICAgICByZXR1cm4gJ0Nyw4PCqWRpdG8gZGUgQ290YSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9tb3ZpbWVudGF0aW9uSXRlbS5tb3ZlbWVudFR5cGUgPT09ICdyZXNjdWUnICYmIHRoaXMuX21vdmltZW50YXRpb25JdGVtLm1vdmVtZW50Q2F0ZWdvcnkgPT09ICdxdW90YScpIHtcbiAgICAgIHJldHVybiAnUmVzZ2F0ZSBkZSBDb3RhJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdudWxvJztcbiAgICB9XG4gIH1cblxuICBhY3Rpb25TaG93SXRlbURldGFpbCgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dJdGVtRGV0YWlsID0gIXRoaXMuc2hvd0l0ZW1EZXRhaWw7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xjLXRpbWVsaW5lLXRhYnMnLFxuICB0ZW1wbGF0ZTogYDxtYXQtdGFiLWdyb3VwPlxuICA8bWF0LXRhYiBsYWJlbD1cIlR1ZG9cIj5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBkYXkgb2YgZGF5c0FzTGluZUl0ZW1cIj5cbiAgICAgIDxtYXQtY2hpcC1saXN0PlxuICAgICAgICA8bWF0LWNoaXA+e3sgZGF5LmxhYmVsIH19PC9tYXQtY2hpcD5cbiAgICAgIDwvbWF0LWNoaXAtbGlzdD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1saW5lXCI+XG4gICAgICAgIDxsYy10aW1lbGluZS1pdGVtXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG1vdmVtZW50IG9mIGRheS5tb3ZlbWVudFwiXG4gICAgICAgICAgW21vdmltZW50YXRpb25dPVwibW92ZW1lbnRcIlxuICAgICAgICA+PC9sYy10aW1lbGluZS1pdGVtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJDcsODwqlkaXRvXCIgY2xhc3M9XCJjZW50ZXJcIj4gPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlJlc2dhdGVzXCI+IDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJGdXR1cm9cIj48L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lbGluZVRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGRheXNBc0xpbmVJdGVtOiBhbnlbXSA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdIb2plJyxcbiAgICAgICAgbW92ZW1lbnQ6IFtcbiAgICAgICAgICB7IG1vdmVtZW50VHlwZTogJ2NyZWRpdCcsIG1vdmVtZW50Q2F0ZWdvcnk6ICdwcm9kdWN0JywgbW92ZW1lbnRWYWx1ZTogMzkwMCB9LFxuICAgICAgICAgIHsgbW92ZW1lbnRUeXBlOiAnY3JlZGl0JywgbW92ZW1lbnRDYXRlZ29yeTogJ3F1b3RhJywgbW92ZW1lbnRWYWx1ZTogOTAzMDAgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICcyNiBkZSBPdXR1YnJvJyxcbiAgICAgICAgbW92ZW1lbnQ6IFtcbiAgICAgICAgICB7IG1vdmVtZW50VHlwZTogJ3Jlc2N1ZScsIG1vdmVtZW50Q2F0ZWdvcnk6ICdxdW90YScsIG1vdmVtZW50VmFsdWU6IDg5MDAwMCB9LFxuICAgICAgICBdXG4gICAgICAgfSxcbiAgICAgICB7XG4gICAgICAgIGxhYmVsOiAnMjUgZGUgT3V0dWJybycsXG4gICAgICAgIG1vdmVtZW50OiBbXG4gICAgICAgICAgeyBtb3ZlbWVudFR5cGU6ICdjcmVkaXQnLCBtb3ZlbWVudENhdGVnb3J5OiAncXVvdGEnLCBtb3ZlbWVudFZhbHVlOiA3ODU3NjMgfSxcbiAgICAgICAgICB7IG1vdmVtZW50VHlwZTogJ2NyZWRpdCcsIG1vdmVtZW50Q2F0ZWdvcnk6ICdwcm9kdWN0JywgbW92ZW1lbnRWYWx1ZTogNTQwMDkgfSxcbiAgICAgICAgXVxuICAgICAgIH0sXG4gICAgICAge1xuICAgICAgICBsYWJlbDogJzI2IGRlIE91dHVicm8nLFxuICAgICAgICBtb3ZlbWVudDogW1xuICAgICAgICAgIHsgbW92ZW1lbnRUeXBlOiAncmVzY3VlJywgbW92ZW1lbnRDYXRlZ29yeTogJ3Byb2R1Y3QnLCBtb3ZlbWVudFZhbHVlOiA3NjU0ODkwMCB9LFxuICAgICAgICBdXG4gICAgICAgfSxcbiAgXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYy1kYXRlcGlja2VyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IChjbGljayk9XCJwaWNrZXIub3BlbigpXCI+XG4gIDxsYWJlbD57eyBsYWJlbFRleHRWaWV3IH19PC9sYWJlbD5cbiAgPGlucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiPlxuICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlciBpZD1cImRhdGVQaWNrZXJcIj48L21hdC1kYXRlcGlja2VyPlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgX2xhYmVsVGV4dDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBsYWJlbFRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhYmVsVGV4dCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGxhYmVsVGV4dFZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsVGV4dDtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGMtZmlsdGVyLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiPlxuICA8bWF0LWljb24+ZmlsdGVyX2xpc3Q8L21hdC1pY29uPiB7eyBmaWx0ZXJUZXh0IH19IDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19kb3duPC9tYXQtaWNvbj5cbjwvYnV0dG9uPlxuPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiIFtjbGFzc109XCInZmlsdGVyLXNlbGVjdCdcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJmaWx0ZXJFdmVudCgkZXZlbnQpXCIgW3ZhbHVlXT1cIidQcm9kdXRvcydcIj5Qcm9kdXRvczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cImZpbHRlckV2ZW50KCRldmVudClcIiBbdmFsdWVdPVwiJ0NvdGFzJ1wiPkNvdGFzPC9idXR0b24+XG4gIDwhLS0gPGJ1dHRvbiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJmaWx0ZXJFdmVudCgkZXZlbnQpXCIgW3ZhbHVlXT1cIidQcm9kdXRvcyBlIENvdGFzJ1wiPlByb2R1dG9zIGUgQ290YXM8L2J1dHRvbj4gLS0+XG48L21hdC1tZW51PlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpIHRocm93RmlsdGVyU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBmaWx0ZXJTZWxlY3RlZDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBmaWx0ZXJFdmVudChldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSkge1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudGhyb3dGaWx0ZXJTZWxlY3RlZC5lbWl0KHRoaXMuZmlsdGVyU2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBmaWx0ZXJUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbHRlclNlbGVjdGVkID8gdGhpcy5maWx0ZXJTZWxlY3RlZCA6ICdGaWx0cmFyJztcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tCYXJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7IH1cblxuICBwdWJsaWMgb3BlblNuYWNrQmFyKG1lc3NhZ2U6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcgPSAnT0snLCBkdXJhdGlvbjogbnVtYmVyID0gMzAwMCkge1xuICAgIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCBhY3Rpb24sIHtcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIHBhbmVsQ2xhc3M6IFsnbWF0LXNuYWNrLWJhci1jb250YWluZXInXVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYy1kaWFsb2ctYWxlcnQnLFxuICB0ZW1wbGF0ZTogYDxoMiBtYXQtZGlhbG9nLXRpdGxlPnt7dGl0bGV9fTwvaDI+XG5cbjxtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gIDxwIGNsYXNzPVwidGV4dC1jZW50ZXJcIltpbm5lckhUTUxdPVwibWVzc2FnZVwiPjwvcD5cbjwvbWF0LWRpYWxvZy1jb250ZW50PlxuXG48bWF0LWRpYWxvZy1hY3Rpb25zPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCI+T0s8L2J1dHRvbj5cbjwvbWF0LWRpYWxvZy1hY3Rpb25zPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHRpdGxlO1xuICBwdWJsaWMgbWVzc2FnZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0FsZXJ0Q29tcG9uZW50PikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpYWxvZ0FsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vZGlhbG9nLWFsZXJ0L2RpYWxvZy1hbGVydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2dDb25maWcsIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQWxlcnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgIHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvbikge1xuXG4gIH1cblxuICBwdWJsaWMgb3BlbkFsZXJ0RGlhbG9nKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IGRpYWxvZ0NvbmZpZyA9IG5ldyBNYXREaWFsb2dDb25maWcoKTtcblxuICAgIGRpYWxvZ0NvbmZpZy5kaXNhYmxlQ2xvc2UgPSB0cnVlO1xuICAgIGRpYWxvZ0NvbmZpZy5hdXRvRm9jdXMgPSB0cnVlO1xuXG4gICAgbGV0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0FsZXJ0Q29tcG9uZW50PjtcbiAgICBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0FsZXJ0Q29tcG9uZW50LCBkaWFsb2dDb25maWcpO1xuXG4gICAgZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLnRpdGxlID0gdGl0bGU7XG4gICAgZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgcHVibGljIG9wZW5BbGVydERpYWxvZ0FjdGlvbih0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkaWFsb2dDb25maWcgPSBuZXcgTWF0RGlhbG9nQ29uZmlnKCk7XG5cbiAgICBkaWFsb2dDb25maWcuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcbiAgICBkaWFsb2dDb25maWcuYXV0b0ZvY3VzID0gdHJ1ZTtcblxuICAgIGxldCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEaWFsb2dBbGVydENvbXBvbmVudD47XG4gICAgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dBbGVydENvbXBvbmVudCwgZGlhbG9nQ29uZmlnKTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHRzID0+IHtcbiAgICAgIHRoaXMuX2xvY2F0aW9uLmJhY2soKTtcbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS50aXRsZSA9IHRpdGxlO1xuICAgIGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTGNEZXZraXRDb21wb25lbnQgfSBmcm9tICcuL25nLWxjLWRldmtpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcblxuaW1wb3J0IHtcbiAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gIE1hdEJ1dHRvbk1vZHVsZSxcbiAgTWF0VGFic01vZHVsZSxcbiAgTWF0Q2hpcHNNb2R1bGUsXG4gIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gIE1hdE1lbnVNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsXG4gIE1hdFNuYWNrQmFyTW9kdWxlLFxuICBNYXREaWFsb2dNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVGltZWxpbmVJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lbGluZS1pdGVtLWRldGFpbC90aW1lbGluZS1pdGVtLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGltZWxpbmVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lbGluZS1pdGVtL3RpbWVsaW5lLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFRpbWVsaW5lVGFic0NvbXBvbmVudCB9IGZyb20gJy4vdGltZWxpbmUtdGFicy90aW1lbGluZS10YWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlclNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLXNlbGVjdC9maWx0ZXItc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbmFja0JhclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NuYWNrLWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IERpYWxvZ0FsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctYWxlcnQvZGlhbG9nLWFsZXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dBbGVydFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RpYWxvZy1hbGVydC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmdMY0RldmtpdENvbXBvbmVudCxcbiAgICBQcm9ncmVzc0JhckNvbXBvbmVudCxcbiAgICBUaW1lbGluZUl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgVGltZWxpbmVJdGVtQ29tcG9uZW50LFxuICAgIFRpbWVsaW5lVGFic0NvbXBvbmVudCxcbiAgICBEYXRlcGlja2VyQ29tcG9uZW50LFxuICAgIEZpbHRlclNlbGVjdENvbXBvbmVudCxcbiAgICBEaWFsb2dBbGVydENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmdMY0RldmtpdENvbXBvbmVudCxcbiAgICBQcm9ncmVzc0JhckNvbXBvbmVudCxcbiAgICBUaW1lbGluZUl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgVGltZWxpbmVJdGVtQ29tcG9uZW50LFxuICAgIFRpbWVsaW5lVGFic0NvbXBvbmVudCxcbiAgICBEYXRlcGlja2VyQ29tcG9uZW50LFxuICAgIEZpbHRlclNlbGVjdENvbXBvbmVudCxcbiAgICBEaWFsb2dBbGVydENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtTbmFja0JhclNlcnZpY2UsIERpYWxvZ0FsZXJ0U2VydmljZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW0RpYWxvZ0FsZXJ0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ0xjRGV2a2l0TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQU9FLGlCQUFpQjs7O1lBTGxCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pEO0lBYUUsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7Ozs7OztBQ1ZEO0lBK0VFO3FCQUhRLE9BQU87dUJBQ0wsU0FBUztLQUVGOzs7O0lBRWpCLFFBQVE7S0FDUDs7Ozs7SUFFRCxJQUFhLFlBQVksQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0tBQzVCOzs7OztJQUVELElBQWEsZ0JBQWdCLENBQUMsS0FBYTtRQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0tBQ2hDOzs7OztJQUVELElBQWEsT0FBTyxDQUFDLEtBQWM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7S0FDNUI7Ozs7O0lBRUQsSUFBYSxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7S0FDaEM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssT0FBTyxHQUFHLE9BQU8sR0FBRyxVQUFVLENBQUM7S0FDOUQ7Ozs7SUFFRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssT0FBTyxHQUFHLGlCQUFpQixHQUFHLGNBQWMsQ0FBQztLQUM1RTs7OztJQUVELElBQUksb0JBQW9CO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxPQUFPLEdBQUcsbUJBQW1CLEdBQUcsYUFBYSxDQUFDO0tBQzdFOzs7O0lBRUQsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7S0FDL0I7Ozs7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztLQUMvQjs7OztJQUVELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMzQjs7OztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssT0FBTyxHQUFHLG1DQUFtQyxHQUFHLCtCQUErQixDQUFBO0tBQzlHOzs7WUE1SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWdFWDthQUNBOzs7OzsyQkFlRSxLQUFLOytCQUlMLEtBQUs7c0JBSUwsS0FBSzsrQkFJTCxLQUFLOzs7Ozs7O0FDaEdSO0lBcUJFLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBQ1A7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O09BYUw7YUFDTjs7Ozs7Ozs7O0FDbEJEO0lBZ0RFO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7S0FDN0I7Ozs7SUFFRCxRQUFRO0tBQ1A7Ozs7O0lBRUQsSUFBYSxhQUFhLENBQUMsS0FBVTtRQUNuQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0tBQ2pDOzs7O0lBRUQsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDO0tBQzdDOzs7O0lBRUQsSUFBSSxvQkFBb0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztLQUM5Qzs7OztJQUVELElBQUkscUJBQXFCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztLQUM5Qzs7OztJQUVELDhCQUE4QjtRQUM1QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLEVBQUU7WUFDL0csT0FBTyxvQkFBb0IsQ0FBQztTQUM3QjthQUFNLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixLQUFLLFNBQVMsRUFBRTtZQUN0SCxPQUFPLG9CQUFvQixDQUFDO1NBQzdCO2FBQU0sSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEtBQUssT0FBTyxFQUFFO1lBQ3BILE9BQU8saUJBQWlCLENBQUM7U0FDMUI7YUFBTSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsS0FBSyxPQUFPLEVBQUU7WUFDcEgsT0FBTyxpQkFBaUIsQ0FBQztTQUMxQjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUM7U0FDZjtLQUNGOzs7O0lBRUQsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0tBQzVDOzs7WUFwRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBb0NYO2FBRUE7Ozs7OzRCQVlFLEtBQUs7Ozs7Ozs7QUN2RFI7SUF1REU7OEJBN0J3QjtZQUNwQjtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUU7b0JBQ1IsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFO29CQUM1RSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUU7aUJBQzVFO2FBQ0Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsZUFBZTtnQkFDdEIsUUFBUSxFQUFFO29CQUNSLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRTtpQkFDN0U7YUFDRDtZQUNEO2dCQUNDLEtBQUssRUFBRSxlQUFlO2dCQUN0QixRQUFRLEVBQUU7b0JBQ1IsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFO29CQUM1RSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUU7aUJBQzlFO2FBQ0Q7WUFDRDtnQkFDQyxLQUFLLEVBQUUsZUFBZTtnQkFDdEIsUUFBUSxFQUFFO29CQUNSLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRTtpQkFDakY7YUFDRDtTQUNMO0tBRWdCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtCWDthQUNBOzs7Ozs7Ozs7QUN2QkQ7SUFnQkUsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FFUDs7Ozs7SUFFRCxJQUFhLFNBQVMsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0tBQ3pCOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7O0NBS1g7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7O3dCQVdFLEtBQUs7Ozs7Ozs7QUN0QlI7SUFvQkU7bUNBSG1ELElBQUksWUFBWSxFQUFFO0tBR3BEOzs7O0lBRWpCLFFBQVE7S0FDUDs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBVTtRQUNwQixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDekMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDcEQ7S0FDRjs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztLQUM5RDs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7O0NBUVg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7O2tDQUdFLE1BQU07Ozs7Ozs7QUNqQlQ7Ozs7SUFRRSxZQUFtQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO0tBQUs7Ozs7Ozs7SUFFdEMsWUFBWSxDQUFDLE9BQWUsRUFBRSxTQUFpQixJQUFJLEVBQUUsV0FBbUIsSUFBSTtRQUNqRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFO1lBQ2xDLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFVBQVUsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3hDLENBQUMsQ0FBQzs7OztZQVhOLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLFdBQVc7Ozs7Ozs7O0FDRHBCOzs7O0lBcUJFLFlBQW9CLFNBQTZDO1FBQTdDLGNBQVMsR0FBVCxTQUFTLENBQW9DO0tBQUs7Ozs7SUFFdEUsUUFBUTtLQUNQOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDeEI7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7OztzQkFRVTtnQkFDcEIsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7WUFkUSxZQUFZOzs7Ozs7O0FDRHJCOzs7OztJQVVFLFlBQW9CLE1BQWlCLEVBQzNCO1FBRFUsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUMzQixjQUFTLEdBQVQsU0FBUztLQUVsQjs7Ozs7O0lBRU0sZUFBZSxDQUFDLEtBQWEsRUFBRSxPQUFlOztRQUNuRCxNQUFNLFlBQVksR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBRTNDLFlBQVksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOztRQUU5QixJQUFJLFNBQVMsQ0FBcUM7UUFDbEQsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRWpFLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOzs7Ozs7O0lBR3pDLHFCQUFxQixDQUFDLEtBQWEsRUFBRSxPQUFlOztRQUN6RCxNQUFNLFlBQVksR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBRTNDLFlBQVksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOztRQUU5QixJQUFJLFNBQVMsQ0FBcUM7UUFDbEQsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRWpFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTztZQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3ZCLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOzs7O1lBckNqRCxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFMdUMsU0FBUztZQUN4QyxRQUFROzs7Ozs7OztBQ0hqQjs7O1lBMEJDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixjQUFjO29CQUNkLG1CQUFtQjtvQkFDbkIsYUFBYTtvQkFDYixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsZUFBZTtpQkFDaEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQiwyQkFBMkI7b0JBQzNCLHFCQUFxQjtvQkFDckIscUJBQXFCO29CQUNyQixtQkFBbUI7b0JBQ25CLHFCQUFxQjtvQkFDckIsb0JBQW9CO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLDJCQUEyQjtvQkFDM0IscUJBQXFCO29CQUNyQixxQkFBcUI7b0JBQ3JCLG1CQUFtQjtvQkFDbkIscUJBQXFCO29CQUNyQixvQkFBb0I7aUJBQ3JCO2dCQUNELFNBQVMsRUFBRSxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQztnQkFDaEQsZUFBZSxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDeEM7Ozs7Ozs7Ozs7Ozs7OzsifQ==