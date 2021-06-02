import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeHistoryDetailComponent } from './change-history-detail.component';

describe('ChangeHistoryDetailComponent', () => {
  let component: ChangeHistoryDetailComponent;
  let fixture: ComponentFixture<ChangeHistoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeHistoryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeHistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
