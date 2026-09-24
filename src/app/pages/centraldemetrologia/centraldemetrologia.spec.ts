import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centraldemetrologia } from './centraldemetrologia';

describe('Centraldemetrologia', () => {
  let component: Centraldemetrologia;
  let fixture: ComponentFixture<Centraldemetrologia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Centraldemetrologia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Centraldemetrologia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
