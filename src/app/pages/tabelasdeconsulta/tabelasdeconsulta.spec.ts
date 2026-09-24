import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabelasdeconsulta } from './tabelasdeconsulta';

describe('Tabelasdeconsulta', () => {
  let component: Tabelasdeconsulta;
  let fixture: ComponentFixture<Tabelasdeconsulta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tabelasdeconsulta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabelasdeconsulta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
