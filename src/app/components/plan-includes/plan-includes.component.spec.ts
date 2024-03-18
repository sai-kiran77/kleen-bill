import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanIncludesComponent } from './plan-includes.component';

describe('PlanIncludesComponent', () => {
  let component: PlanIncludesComponent;
  let fixture: ComponentFixture<PlanIncludesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanIncludesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanIncludesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
