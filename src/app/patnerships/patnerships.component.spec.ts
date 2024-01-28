import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatnershipsComponent } from './patnerships.component';

describe('PatnershipsComponent', () => {
  let component: PatnershipsComponent;
  let fixture: ComponentFixture<PatnershipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatnershipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatnershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
