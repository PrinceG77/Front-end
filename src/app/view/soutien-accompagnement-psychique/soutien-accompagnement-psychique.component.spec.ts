import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutienAccompagnementPsychiqueComponent } from './soutien-accompagnement-psychique.component';

describe('SoutienAccompagnementPsychiqueComponent', () => {
  let component: SoutienAccompagnementPsychiqueComponent;
  let fixture: ComponentFixture<SoutienAccompagnementPsychiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoutienAccompagnementPsychiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoutienAccompagnementPsychiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
