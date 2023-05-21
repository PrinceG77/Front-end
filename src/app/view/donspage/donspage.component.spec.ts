import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonspageComponent } from './donspage.component';

describe('DonspageComponent', () => {
  let component: DonspageComponent;
  let fixture: ComponentFixture<DonspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
