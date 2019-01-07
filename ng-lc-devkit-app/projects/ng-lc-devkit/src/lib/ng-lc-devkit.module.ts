import { NgModule } from '@angular/core';
import { NgLcDevkitComponent } from './ng-lc-devkit.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

import {
  MatProgressBarModule,
  MatButtonModule,
  MatTabsModule,
  MatChipsModule,
  MatDatepickerModule,
  MatMenuModule,
  MatIconModule,
  MatSnackBarModule,
  MatDialogModule
} from '@angular/material';

import { CommonModule } from '@angular/common';
import { TimelineItemDetailComponent } from './timeline-item-detail/timeline-item-detail.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { TimelineTabsComponent } from './timeline-tabs/timeline-tabs.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FilterSelectComponent } from './filter-select/filter-select.component';
import { SnackBarService } from './services/snack-bar.service';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';
import { DialogAlertService } from './services/dialog-alert.service';

@NgModule({
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
})
export class NgLcDevkitModule { }
