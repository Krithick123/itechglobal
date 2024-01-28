import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoweAreComponent } from './whowe-are.component';

describe('WhoweAreComponent', () => {
  let component: WhoweAreComponent;
  let fixture: ComponentFixture<WhoweAreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhoweAreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhoweAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
