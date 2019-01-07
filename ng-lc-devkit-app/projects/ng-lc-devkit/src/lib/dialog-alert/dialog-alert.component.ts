import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'lc-dialog-alert',
  templateUrl: './dialog-alert.component.html',
  styleUrls: ['./dialog-alert.component.css']
})
export class DialogAlertComponent implements OnInit {

  public title;
  public message;

  constructor(private dialogRef: MatDialogRef<DialogAlertComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
