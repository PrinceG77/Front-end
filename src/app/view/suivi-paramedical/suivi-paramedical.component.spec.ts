import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviParamedicalComponent } from './suivi-paramedical.component';

describe('SuiviParamedicalComponent', () => {
  let component: SuiviParamedicalComponent;
  let fixture: ComponentFixture<SuiviParamedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviParamedicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviParamedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
