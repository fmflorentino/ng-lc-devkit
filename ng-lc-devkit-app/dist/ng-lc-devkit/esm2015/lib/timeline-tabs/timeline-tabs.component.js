/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class TimelineTabsComponent {
    constructor() {
        this.daysAsLineItem = [
            {
                label: 'Hoje',
                movement: [
                    { movementType: 'credit', movementCategory: 'product', movementValue: 3900 },
                    { movementType: 'credit', movementCategory: 'quota', movementValue: 90300 },
                ]
            },
            {
                label: '26 de Outubro',
                movement: [
                    { movementType: 'rescue', movementCategory: 'quota', movementValue: 890000 },
                ]
            },
            {
                label: '25 de Outubro',
                movement: [
                    { movementType: 'credit', movementCategory: 'quota', movementValue: 785763 },
                    { movementType: 'credit', movementCategory: 'product', movementValue: 54009 },
                ]
            },
            {
                label: '26 de Outubro',
                movement: [
                    { movementType: 'rescue', movementCategory: 'product', movementValue: 76548900 },
                ]
            },
        ];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TimelineTabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lc-timeline-tabs',
                template: `<mat-tab-group>
  <mat-tab label="Tudo">
    <div *ngFor="let day of daysAsLineItem">
      <mat-chip-list>
        <mat-chip>{{ day.label }}</mat-chip>
      </mat-chip-list>
      <div class="timeline-line">
        <lc-timeline-item
          *ngFor="let movement of day.movement"
          [movimentation]="movement"
        ></lc-timeline-item>
      </div>
    </div>
  </mat-tab>
  <mat-tab label="Crédito" class="center"> </mat-tab>
  <mat-tab label="Resgates"> </mat-tab>
  <mat-tab label="Futuro"></mat-tab>
</mat-tab-group>
`,
            },] },
];
/** @nocollapse */
TimelineTabsComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    TimelineTabsComponent.prototype.daysAsLineItem;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtdGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1sYy1kZXZraXQvIiwic291cmNlcyI6WyJsaWIvdGltZWxpbmUtdGFicy90aW1lbGluZS10YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQXdCbEQsTUFBTTtJQStCSjs4QkE3QndCO1lBQ3BCO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRTtvQkFDUixFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUU7b0JBQzVFLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRTtpQkFDNUU7YUFDRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxlQUFlO2dCQUN0QixRQUFRLEVBQUU7b0JBQ1IsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFO2lCQUM3RTthQUNEO1lBQ0Q7Z0JBQ0MsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLFFBQVEsRUFBRTtvQkFDUixFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUU7b0JBQzVFLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRTtpQkFDOUU7YUFDRDtZQUNEO2dCQUNDLEtBQUssRUFBRSxlQUFlO2dCQUN0QixRQUFRLEVBQUU7b0JBQ1IsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFO2lCQUNqRjthQUNEO1NBQ0w7S0FFZ0I7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUF4REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0JYO2FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYy10aW1lbGluZS10YWJzJyxcbiAgdGVtcGxhdGU6IGA8bWF0LXRhYi1ncm91cD5cbiAgPG1hdC10YWIgbGFiZWw9XCJUdWRvXCI+XG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZGF5IG9mIGRheXNBc0xpbmVJdGVtXCI+XG4gICAgICA8bWF0LWNoaXAtbGlzdD5cbiAgICAgICAgPG1hdC1jaGlwPnt7IGRheS5sYWJlbCB9fTwvbWF0LWNoaXA+XG4gICAgICA8L21hdC1jaGlwLWxpc3Q+XG4gICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtbGluZVwiPlxuICAgICAgICA8bGMtdGltZWxpbmUtaXRlbVxuICAgICAgICAgICpuZ0Zvcj1cImxldCBtb3ZlbWVudCBvZiBkYXkubW92ZW1lbnRcIlxuICAgICAgICAgIFttb3ZpbWVudGF0aW9uXT1cIm1vdmVtZW50XCJcbiAgICAgICAgPjwvbGMtdGltZWxpbmUtaXRlbT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiQ3LDqWRpdG9cIiBjbGFzcz1cImNlbnRlclwiPiA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiUmVzZ2F0ZXNcIj4gPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIkZ1dHVyb1wiPjwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZGF5c0FzTGluZUl0ZW06IGFueVtdID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ0hvamUnLFxuICAgICAgICBtb3ZlbWVudDogW1xuICAgICAgICAgIHsgbW92ZW1lbnRUeXBlOiAnY3JlZGl0JywgbW92ZW1lbnRDYXRlZ29yeTogJ3Byb2R1Y3QnLCBtb3ZlbWVudFZhbHVlOiAzOTAwIH0sXG4gICAgICAgICAgeyBtb3ZlbWVudFR5cGU6ICdjcmVkaXQnLCBtb3ZlbWVudENhdGVnb3J5OiAncXVvdGEnLCBtb3ZlbWVudFZhbHVlOiA5MDMwMCB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJzI2IGRlIE91dHVicm8nLFxuICAgICAgICBtb3ZlbWVudDogW1xuICAgICAgICAgIHsgbW92ZW1lbnRUeXBlOiAncmVzY3VlJywgbW92ZW1lbnRDYXRlZ29yeTogJ3F1b3RhJywgbW92ZW1lbnRWYWx1ZTogODkwMDAwIH0sXG4gICAgICAgIF1cbiAgICAgICB9LFxuICAgICAgIHtcbiAgICAgICAgbGFiZWw6ICcyNSBkZSBPdXR1YnJvJyxcbiAgICAgICAgbW92ZW1lbnQ6IFtcbiAgICAgICAgICB7IG1vdmVtZW50VHlwZTogJ2NyZWRpdCcsIG1vdmVtZW50Q2F0ZWdvcnk6ICdxdW90YScsIG1vdmVtZW50VmFsdWU6IDc4NTc2MyB9LFxuICAgICAgICAgIHsgbW92ZW1lbnRUeXBlOiAnY3JlZGl0JywgbW92ZW1lbnRDYXRlZ29yeTogJ3Byb2R1Y3QnLCBtb3ZlbWVudFZhbHVlOiA1NDAwOSB9LFxuICAgICAgICBdXG4gICAgICAgfSxcbiAgICAgICB7XG4gICAgICAgIGxhYmVsOiAnMjYgZGUgT3V0dWJybycsXG4gICAgICAgIG1vdmVtZW50OiBbXG4gICAgICAgICAgeyBtb3ZlbWVudFR5cGU6ICdyZXNjdWUnLCBtb3ZlbWVudENhdGVnb3J5OiAncHJvZHVjdCcsIG1vdmVtZW50VmFsdWU6IDc2NTQ4OTAwIH0sXG4gICAgICAgIF1cbiAgICAgICB9LFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19