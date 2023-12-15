import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyTrendingComponent } from './weekly-trending.component';

describe('WeeklyTrendingComponent', () => {
  let component: WeeklyTrendingComponent;
  let fixture: ComponentFixture<WeeklyTrendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklyTrendingComponent]
    });
    fixture = TestBed.createComponent(WeeklyTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
