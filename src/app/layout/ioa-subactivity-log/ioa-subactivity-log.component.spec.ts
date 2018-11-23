import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoaSubactivityLogComponent } from './ioa-subactivity-log.component';

describe('IoaSubactivityLogComponent', () => {
  let component: IoaSubactivityLogComponent;
  let fixture: ComponentFixture<IoaSubactivityLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoaSubactivityLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoaSubactivityLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
