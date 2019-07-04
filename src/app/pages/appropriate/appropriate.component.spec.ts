import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppropriateComponent } from './appropriate.component';

describe('AppropriateComponent', () => {
  let component: AppropriateComponent;
  let fixture: ComponentFixture<AppropriateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppropriateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppropriateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
