import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLcDevkitComponent } from './ng-lc-devkit.component';

describe('NgLcDevkitComponent', () => {
  let component: NgLcDevkitComponent;
  let fixture: ComponentFixture<NgLcDevkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgLcDevkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLcDevkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
