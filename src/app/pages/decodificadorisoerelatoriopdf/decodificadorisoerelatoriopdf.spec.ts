import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decodificadorisoerelatoriopdf } from './decodificadorisoerelatoriopdf';

describe('Decodificadorisoerelatoriopdf', () => {
  let component: Decodificadorisoerelatoriopdf;
  let fixture: ComponentFixture<Decodificadorisoerelatoriopdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decodificadorisoerelatoriopdf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decodificadorisoerelatoriopdf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
