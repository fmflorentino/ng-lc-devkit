import { Injectable } from '@angular/core';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';
import { MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DialogAlertService {

  constructor(private dialog: MatDialog,
    private _location: Location) {

  }

  public openAlertDialog(title: string, message: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    let dialogRef: MatDialogRef<DialogAlertComponent>;
    dialogRef = this.dialog.open(DialogAlertComponent, dialogConfig);

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;
  }

  public openAlertDialogAction(title: string, message: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    let dialogRef: MatDialogRef<DialogAlertComponent>;
    dialogRef = this.dialog.open(DialogAlertComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(results => {
      this._location.back();
    });

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;
  }
}
