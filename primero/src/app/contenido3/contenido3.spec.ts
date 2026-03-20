import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenido3 } from './contenido3';

describe('Contenido3', () => {
  let component: Contenido3;
  let fixture: ComponentFixture<Contenido3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contenido3],
    }).compileComponents();

    fixture = TestBed.createComponent(Contenido3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
