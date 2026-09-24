import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gestaodemateriasreciclaveisesg } from './gestaodemateriasreciclaveisesg';

describe('Gestaodemateriasreciclaveisesg', () => {
  let component: Gestaodemateriasreciclaveisesg;
  let fixture: ComponentFixture<Gestaodemateriasreciclaveisesg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gestaodemateriasreciclaveisesg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gestaodemateriasreciclaveisesg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
