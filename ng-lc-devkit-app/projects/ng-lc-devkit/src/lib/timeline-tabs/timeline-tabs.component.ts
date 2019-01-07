import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lc-timeline-tabs',
  templateUrl: './timeline-tabs.component.html',
})
export class TimelineTabsComponent implements OnInit {

  daysAsLineItem: any[] = [
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

  constructor() { }

  ngOnInit() {
  }

}
