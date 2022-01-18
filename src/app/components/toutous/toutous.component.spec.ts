import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutousComponent } from './toutous.component';

describe('ToutousComponent', () => {
  let component: ToutousComponent;
  let fixture: ComponentFixture<ToutousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToutousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
