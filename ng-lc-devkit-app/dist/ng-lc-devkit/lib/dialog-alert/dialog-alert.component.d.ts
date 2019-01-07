import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export declare class DialogAlertComponent implements OnInit {
    private dialogRef;
    title: any;
    message: any;
    constructor(dialogRef: MatDialogRef<DialogAlertComponent>);
    ngOnInit(): void;
    close(): void;
}
