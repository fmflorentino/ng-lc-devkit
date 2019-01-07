import { OnInit } from '@angular/core';
export declare class TimelineItemComponent implements OnInit {
    _movimentationItem: any;
    showItemDetail: boolean;
    constructor();
    ngOnInit(): void;
    movimentation: any;
    readonly movimentationType: string;
    readonly getMovimentationName: string;
    readonly getMovimentationValue: number;
    getMovimentationNameValidation(): string;
    actionShowItemDetail(): void;
}
