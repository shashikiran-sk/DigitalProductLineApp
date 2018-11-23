import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoaInfoComponent } from './ioa-info.component';

describe('IoaInfoComponent', () => {
  let component: IoaInfoComponent;
  let fixture: ComponentFixture<IoaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
