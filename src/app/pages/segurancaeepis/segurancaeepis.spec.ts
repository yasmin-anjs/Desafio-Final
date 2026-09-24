import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Segurancaeepis } from './segurancaeepis';

describe('Segurancaeepis', () => {
  let component: Segurancaeepis;
  let fixture: ComponentFixture<Segurancaeepis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Segurancaeepis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Segurancaeepis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
