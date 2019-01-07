import { MatSnackBar } from '@angular/material';
export declare class SnackBarService {
    snackBar: MatSnackBar;
    constructor(snackBar: MatSnackBar);
    openSnackBar(message: string, action?: string, duration?: number): void;
}
