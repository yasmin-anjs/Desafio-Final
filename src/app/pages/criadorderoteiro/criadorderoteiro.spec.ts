import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Criadorderoteiro } from './criadorderoteiro';

describe('Criadorderoteiro', () => {
  let component: Criadorderoteiro;
  let fixture: ComponentFixture<Criadorderoteiro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Criadorderoteiro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Criadorderoteiro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
