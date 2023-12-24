import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardpanelComponent } from './dashboardpanel.component';

describe('DashboardpanelComponent', () => {
  let component: DashboardpanelComponent;
  let fixture: ComponentFixture<DashboardpanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardpanelComponent]
    });
    fixture = TestBed.createComponent(DashboardpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
