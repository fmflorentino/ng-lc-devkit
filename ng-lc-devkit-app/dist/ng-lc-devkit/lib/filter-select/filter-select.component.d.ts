import { OnInit, EventEmitter } from '@angular/core';
export declare class FilterSelectComponent implements OnInit {
    throwFilterSelected: EventEmitter<any>;
    filterSelected: any;
    constructor();
    ngOnInit(): void;
    filterEvent(event: any): void;
    readonly filterText: any;
}
