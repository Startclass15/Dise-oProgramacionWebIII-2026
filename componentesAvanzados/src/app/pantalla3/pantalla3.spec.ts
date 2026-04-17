import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla3 } from './pantalla3';

describe('Pantalla3', () => {
  let component: Pantalla3;
  let fixture: ComponentFixture<Pantalla3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla3],
    }).compileComponents();

    fixture = TestBed.createComponent(Pantalla3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
