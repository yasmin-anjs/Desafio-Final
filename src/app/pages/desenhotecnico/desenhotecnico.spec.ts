import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desenhotecnico } from './desenhotecnico';

describe('Desenhotecnico', () => {
  let component: Desenhotecnico;
  let fixture: ComponentFixture<Desenhotecnico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desenhotecnico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Desenhotecnico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
