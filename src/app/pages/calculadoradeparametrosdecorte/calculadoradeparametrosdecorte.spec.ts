import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculadoradeparametrosdecorte } from './calculadoradeparametrosdecorte';

describe('Calculadoradeparametrosdecorte', () => {
  let component: Calculadoradeparametrosdecorte;
  let fixture: ComponentFixture<Calculadoradeparametrosdecorte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculadoradeparametrosdecorte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calculadoradeparametrosdecorte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
