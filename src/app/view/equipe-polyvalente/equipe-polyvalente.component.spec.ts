import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipePolyvalenteComponent } from './equipe-polyvalente.component';

describe('EquipePolyvalenteComponent', () => {
  let component: EquipePolyvalenteComponent;
  let fixture: ComponentFixture<EquipePolyvalenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipePolyvalenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipePolyvalenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
