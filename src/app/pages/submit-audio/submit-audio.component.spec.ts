import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAudioComponent } from './submit-audio.component';

describe('SubmitAudioComponent', () => {
  let component: SubmitAudioComponent;
  let fixture: ComponentFixture<SubmitAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
