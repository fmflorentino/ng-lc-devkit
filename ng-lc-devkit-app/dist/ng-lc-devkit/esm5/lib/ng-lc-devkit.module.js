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
export { NgLcDevkitModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbGMtZGV2a2l0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWxjLWRldmtpdC8iLCJzb3VyY2VzIjpbImxpYi9uZy1sYy1kZXZraXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTdFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsZUFBZSxFQUNmLGFBQWEsRUFDYixjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLGFBQWEsRUFDYixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDaEIsTUFBTSxtQkFBbUIsQ0FBQztBQUUzQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7OztnQkFFcEUsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixlQUFlO3FCQUNoQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLDJCQUEyQjt3QkFDM0IscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLG1CQUFtQjt3QkFDbkIscUJBQXFCO3dCQUNyQixvQkFBb0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsMkJBQTJCO3dCQUMzQixxQkFBcUI7d0JBQ3JCLHFCQUFxQjt3QkFDckIsbUJBQW1CO3dCQUNuQixxQkFBcUI7d0JBQ3JCLG9CQUFvQjtxQkFDckI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDO29CQUNoRCxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDeEM7OzJCQTdERDs7U0E4RGEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTGNEZXZraXRDb21wb25lbnQgfSBmcm9tICcuL25nLWxjLWRldmtpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcblxuaW1wb3J0IHtcbiAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gIE1hdEJ1dHRvbk1vZHVsZSxcbiAgTWF0VGFic01vZHVsZSxcbiAgTWF0Q2hpcHNNb2R1bGUsXG4gIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gIE1hdE1lbnVNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsXG4gIE1hdFNuYWNrQmFyTW9kdWxlLFxuICBNYXREaWFsb2dNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVGltZWxpbmVJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lbGluZS1pdGVtLWRldGFpbC90aW1lbGluZS1pdGVtLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGltZWxpbmVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lbGluZS1pdGVtL3RpbWVsaW5lLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFRpbWVsaW5lVGFic0NvbXBvbmVudCB9IGZyb20gJy4vdGltZWxpbmUtdGFicy90aW1lbGluZS10YWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlclNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLXNlbGVjdC9maWx0ZXItc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbmFja0JhclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NuYWNrLWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IERpYWxvZ0FsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctYWxlcnQvZGlhbG9nLWFsZXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dBbGVydFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RpYWxvZy1hbGVydC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmdMY0RldmtpdENvbXBvbmVudCxcbiAgICBQcm9ncmVzc0JhckNvbXBvbmVudCxcbiAgICBUaW1lbGluZUl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgVGltZWxpbmVJdGVtQ29tcG9uZW50LFxuICAgIFRpbWVsaW5lVGFic0NvbXBvbmVudCxcbiAgICBEYXRlcGlja2VyQ29tcG9uZW50LFxuICAgIEZpbHRlclNlbGVjdENvbXBvbmVudCxcbiAgICBEaWFsb2dBbGVydENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmdMY0RldmtpdENvbXBvbmVudCxcbiAgICBQcm9ncmVzc0JhckNvbXBvbmVudCxcbiAgICBUaW1lbGluZUl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgVGltZWxpbmVJdGVtQ29tcG9uZW50LFxuICAgIFRpbWVsaW5lVGFic0NvbXBvbmVudCxcbiAgICBEYXRlcGlja2VyQ29tcG9uZW50LFxuICAgIEZpbHRlclNlbGVjdENvbXBvbmVudCxcbiAgICBEaWFsb2dBbGVydENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtTbmFja0JhclNlcnZpY2UsIERpYWxvZ0FsZXJ0U2VydmljZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW0RpYWxvZ0FsZXJ0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ0xjRGV2a2l0TW9kdWxlIHsgfVxuIl19