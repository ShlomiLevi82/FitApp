import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesPreviewComponent } from './exercises-preview.component';

describe('ExercisesPreviewComponent', () => {
  let component: ExercisesPreviewComponent;
  let fixture: ComponentFixture<ExercisesPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExercisesPreviewComponent]
    });
    fixture = TestBed.createComponent(ExercisesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
