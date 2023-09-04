import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, filter, map, switchMap } from 'rxjs';
import { muscleGroups } from 'src/app/models/muscleGroups.model';
import { ExerciseService } from '../../service/exercise.service';
import { Exercise } from 'src/app/models/exercises.model';

@Component({
  selector: 'bodypart',
  templateUrl: './bodypart.component.html',
  styleUrls: ['./bodypart.component.scss'],
})
export class BodypartComponent implements OnInit {
  constructor(
    // DI
    private exerciseService: ExerciseService,
    private route: ActivatedRoute // private router: Router
  ) {}
  // DI
  private router = inject(Router);
  private location = inject(Location);

  subscription!: Subscription;
  exercise!: Exercise;
  muscleGroups$!: Observable<muscleGroups>;
  muscleGroups!: muscleGroups;

  ngOnInit() {
    this.exercise = ExerciseService.query();

    console.log(this.exercise);

    this.muscleGroups$ = this.route.data.pipe(
      map((data) => data['muscleGroups'])
    );
  }
}
