import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Act1Page } from './act-1.page';

describe('Act1Page', () => {
  let component: Act1Page;
  let fixture: ComponentFixture<Act1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Act1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
