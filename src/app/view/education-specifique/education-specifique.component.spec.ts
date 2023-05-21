import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSpecifiqueComponent } from './education-specifique.component';

describe('EducationSpecifiqueComponent', () => {
  let component: EducationSpecifiqueComponent;
  let fixture: ComponentFixture<EducationSpecifiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationSpecifiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationSpecifiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
