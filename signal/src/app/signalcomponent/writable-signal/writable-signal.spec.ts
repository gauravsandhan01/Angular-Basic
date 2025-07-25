import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritableSignal } from './writable-signal';

describe('WritableSignal', () => {
  let component: WritableSignal;
  let fixture: ComponentFixture<WritableSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritableSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritableSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
