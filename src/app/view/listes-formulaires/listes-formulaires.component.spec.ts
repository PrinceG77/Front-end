import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesFormulairesComponent } from './listes-formulaires.component';

describe('ListesFormulairesComponent', () => {
  let component: ListesFormulairesComponent;
  let fixture: ComponentFixture<ListesFormulairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesFormulairesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListesFormulairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
