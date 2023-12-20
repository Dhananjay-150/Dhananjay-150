import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveloandetailsComponent } from './activeloandetails.component';

describe('ActiveloandetailsComponent', () => {
  let component: ActiveloandetailsComponent;
  let fixture: ComponentFixture<ActiveloandetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveloandetailsComponent]
    });
    fixture = TestBed.createComponent(ActiveloandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
