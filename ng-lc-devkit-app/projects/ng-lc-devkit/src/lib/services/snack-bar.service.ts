import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(public snackBar: MatSnackBar) { }

  public openSnackBar(message: string, action: string = 'OK', duration: number = 3000) {
    this.snackBar.open(message, action, {
      duration: duration,
      panelClass: ['mat-snack-bar-container']
    });
  }
}
