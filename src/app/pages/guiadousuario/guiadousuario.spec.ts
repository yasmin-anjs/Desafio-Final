import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guiadousuario } from './guiadousuario';

describe('Guiadousuario', () => {
  let component: Guiadousuario;
  let fixture: ComponentFixture<Guiadousuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guiadousuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guiadousuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
