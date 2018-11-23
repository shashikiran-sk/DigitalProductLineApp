import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoaSubactivityComponent } from './ioa-subactivity.component';

describe('IoaSubactivityComponent', () => {
  let component: IoaSubactivityComponent;
  let fixture: ComponentFixture<IoaSubactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoaSubactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoaSubactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
