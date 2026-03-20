import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenido4 } from './contenido4';

describe('Contenido4', () => {
  let component: Contenido4;
  let fixture: ComponentFixture<Contenido4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contenido4],
    }).compileComponents();

    fixture = TestBed.createComponent(Contenido4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
