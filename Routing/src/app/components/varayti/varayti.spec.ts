import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Varayti } from './varayti';

describe('Varayti', () => {
  let component: Varayti;
  let fixture: ComponentFixture<Varayti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Varayti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Varayti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
