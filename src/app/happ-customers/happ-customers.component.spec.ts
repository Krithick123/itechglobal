import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappCustomersComponent } from './happ-customers.component';

describe('HappCustomersComponent', () => {
  let component: HappCustomersComponent;
  let fixture: ComponentFixture<HappCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HappCustomersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HappCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
