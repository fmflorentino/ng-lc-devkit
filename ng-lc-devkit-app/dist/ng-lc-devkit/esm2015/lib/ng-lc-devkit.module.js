/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NgLcDevkitComponent } from './ng-lc-devkit.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MatProgressBarModule, MatButtonModule, MatTabsModule, MatChipsModule, MatDatepickerModule, MatMenuModule, MatIconModule, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { TimelineItemDetailComponent } from './timeline-item-detail/timeline-item-detail.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { TimelineTabsComponent } from './timeline-tabs/timeline-tabs.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FilterSelectComponent } from './filter-select/filter-select.component';
import { SnackBarService } from './services/snack-bar.service';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';
import { DialogAlertService } from './services/dialog-alert.service';
export class NgLcDevkitModule {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbGMtZGV2a2l0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWxjLWRldmtpdC8iLCJzb3VyY2VzIjpbImxpYi9uZy1sYy1kZXZraXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTdFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsZUFBZSxFQUNmLGFBQWEsRUFDYixjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLGFBQWEsRUFDYixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDaEIsTUFBTSxtQkFBbUIsQ0FBQztBQUUzQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBc0NyRSxNQUFNOzs7WUFwQ0wsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixlQUFlO2lCQUNoQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLDJCQUEyQjtvQkFDM0IscUJBQXFCO29CQUNyQixxQkFBcUI7b0JBQ3JCLG1CQUFtQjtvQkFDbkIscUJBQXFCO29CQUNyQixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIsMkJBQTJCO29CQUMzQixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIsbUJBQW1CO29CQUNuQixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtpQkFDckI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDO2dCQUNoRCxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0xjRGV2a2l0Q29tcG9uZW50IH0gZnJvbSAnLi9uZy1sYy1kZXZraXQuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2dyZXNzQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7XG4gIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICBNYXRCdXR0b25Nb2R1bGUsXG4gIE1hdFRhYnNNb2R1bGUsXG4gIE1hdENoaXBzTW9kdWxlLFxuICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICBNYXRNZW51TW9kdWxlLFxuICBNYXRJY29uTW9kdWxlLFxuICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgTWF0RGlhbG9nTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRpbWVsaW5lSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vdGltZWxpbmUtaXRlbS1kZXRhaWwvdGltZWxpbmUtaXRlbS1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbWVsaW5lSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdGltZWxpbmUtaXRlbS90aW1lbGluZS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lbGluZVRhYnNDb21wb25lbnQgfSBmcm9tICcuL3RpbWVsaW5lLXRhYnMvdGltZWxpbmUtdGFicy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci1zZWxlY3QvZmlsdGVyLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU25hY2tCYXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zbmFjay1iYXIuc2VydmljZSc7XG5pbXBvcnQgeyBEaWFsb2dBbGVydENvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLWFsZXJ0L2RpYWxvZy1hbGVydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kaWFsb2ctYWxlcnQuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5nTGNEZXZraXRDb21wb25lbnQsXG4gICAgUHJvZ3Jlc3NCYXJDb21wb25lbnQsXG4gICAgVGltZWxpbmVJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgIFRpbWVsaW5lSXRlbUNvbXBvbmVudCxcbiAgICBUaW1lbGluZVRhYnNDb21wb25lbnQsXG4gICAgRGF0ZXBpY2tlckNvbXBvbmVudCxcbiAgICBGaWx0ZXJTZWxlY3RDb21wb25lbnQsXG4gICAgRGlhbG9nQWxlcnRDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5nTGNEZXZraXRDb21wb25lbnQsXG4gICAgUHJvZ3Jlc3NCYXJDb21wb25lbnQsXG4gICAgVGltZWxpbmVJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgIFRpbWVsaW5lSXRlbUNvbXBvbmVudCxcbiAgICBUaW1lbGluZVRhYnNDb21wb25lbnQsXG4gICAgRGF0ZXBpY2tlckNvbXBvbmVudCxcbiAgICBGaWx0ZXJTZWxlY3RDb21wb25lbnQsXG4gICAgRGlhbG9nQWxlcnRDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbU25hY2tCYXJTZXJ2aWNlLCBEaWFsb2dBbGVydFNlcnZpY2VdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtEaWFsb2dBbGVydENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmdMY0RldmtpdE1vZHVsZSB7IH1cbiJdfQ==