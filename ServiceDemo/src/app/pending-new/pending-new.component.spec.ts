import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingNewComponent } from './pending-new.component';

describe('PendingNewComponent', () => {
  let component: PendingNewComponent;
  let fixture: ComponentFixture<PendingNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
