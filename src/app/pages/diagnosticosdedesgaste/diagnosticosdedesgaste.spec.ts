import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diagnosticosdedesgaste } from './diagnosticosdedesgaste';

describe('Diagnosticosdedesgaste', () => {
  let component: Diagnosticosdedesgaste;
  let fixture: ComponentFixture<Diagnosticosdedesgaste>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diagnosticosdedesgaste]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diagnosticosdedesgaste);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
