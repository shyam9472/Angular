import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpMgrShowComponent } from './emp-mgr-show.component';

describe('EmpMgrShowComponent', () => {
  let component: EmpMgrShowComponent;
  let fixture: ComponentFixture<EmpMgrShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpMgrShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpMgrShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
