import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guiadeferramentas } from './guiadeferramentas';

describe('Guiadeferramentas', () => {
  let component: Guiadeferramentas;
  let fixture: ComponentFixture<Guiadeferramentas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guiadeferramentas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guiadeferramentas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
