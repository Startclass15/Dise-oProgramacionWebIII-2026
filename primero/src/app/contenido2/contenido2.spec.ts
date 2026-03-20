import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenido2 } from './contenido2';

describe('Contenido2', () => {
  let component: Contenido2;
  let fixture: ComponentFixture<Contenido2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contenido2],
    }).compileComponents();

    fixture = TestBed.createComponent(Contenido2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
