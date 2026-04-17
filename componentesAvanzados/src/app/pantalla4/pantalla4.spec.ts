import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla4 } from './pantalla4';

describe('Pantalla4', () => {
  let component: Pantalla4;
  let fixture: ComponentFixture<Pantalla4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla4],
    }).compileComponents();

    fixture = TestBed.createComponent(Pantalla4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
