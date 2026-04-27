import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCharacterSuper } from './form-character-super';

describe('FormCharacterSuper', () => {
  let component: FormCharacterSuper;
  let fixture: ComponentFixture<FormCharacterSuper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCharacterSuper],
    }).compileComponents();

    fixture = TestBed.createComponent(FormCharacterSuper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
