import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InappropriateComponent } from './inappropriate.component';

describe('InappropriateComponent', () => {
  let component: InappropriateComponent;
  let fixture: ComponentFixture<InappropriateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InappropriateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InappropriateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
