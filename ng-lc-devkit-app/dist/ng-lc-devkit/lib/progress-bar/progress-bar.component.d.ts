import { OnInit } from '@angular/core';
export declare class ProgressBarComponent implements OnInit {
    _progressType: string;
    _progressValueOne: number;
    _progressValueTwo: number;
    _progressIcon: boolean;
    quota: string;
    product: string;
    constructor();
    ngOnInit(): void;
    progressType: string;
    progressValueOne: number;
    iconTop: boolean;
    progressValueTwo: number;
    readonly typeName: string;
    readonly getFirstBottomLabel: string;
    readonly getSecondBottomLabel: string;
    readonly progressIconImage: boolean;
    readonly progressIconSrc: string;
}
