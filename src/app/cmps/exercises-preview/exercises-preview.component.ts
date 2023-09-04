import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/exercises.model';
import { ExerciseService } from 'src/app/service/exercise.service';

@Component({
  selector: 'exercises-preview',
  templateUrl: './exercises-preview.component.html',
  styleUrls: ['./exercises-preview.component.scss'],
})
export class ExercisesPreviewComponent {
  @Input() exercise!: Exercise;
  @Output() remove = new EventEmitter<string>();

  OnInit() {
    this.exercise = ExerciseService.query();

    console.log(this.exercise);
  }
}
