import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoaPackageComponent } from './ioa-package.component';

describe('IoaPackageComponent', () => {
  let component: IoaPackageComponent;
  let fixture: ComponentFixture<IoaPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoaPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoaPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
