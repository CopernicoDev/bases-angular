import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonBallSuper } from './dragon-ball-super';

describe('DragonBallSuper', () => {
  let component: DragonBallSuper;
  let fixture: ComponentFixture<DragonBallSuper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonBallSuper],
    }).compileComponents();

    fixture = TestBed.createComponent(DragonBallSuper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
