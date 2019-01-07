import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';
export declare class DialogAlertService {
    private dialog;
    private _location;
    constructor(dialog: MatDialog, _location: Location);
    openAlertDialog(title: string, message: string): void;
    openAlertDialogAction(title: string, message: string): void;
}
