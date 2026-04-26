import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChararcterDragonBallSuper } from './chararcter-dragon-ball-super';

describe('ChararcterDragonBallSuper', () => {
  let component: ChararcterDragonBallSuper;
  let fixture: ComponentFixture<ChararcterDragonBallSuper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChararcterDragonBallSuper],
    }).compileComponents();

    fixture = TestBed.createComponent(ChararcterDragonBallSuper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
