import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActividadDosPage } from './actividad-dos.page';

describe('ActividadDosPage', () => {
  let component: ActividadDosPage;
  let fixture: ComponentFixture<ActividadDosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
