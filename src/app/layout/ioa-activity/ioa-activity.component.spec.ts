import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoaActivityComponent } from './ioa-activity.component';

describe('IoaActivityComponent', () => {
  let component: IoaActivityComponent;
  let fixture: ComponentFixture<IoaActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoaActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoaActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
