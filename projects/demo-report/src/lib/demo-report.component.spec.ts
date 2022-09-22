import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoReportComponent } from './demo-report.component';

describe('DemoReportComponent', () => {
  let component: DemoReportComponent;
  let fixture: ComponentFixture<DemoReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
