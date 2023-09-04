import { Injectable } from '@angular/core';
import { Exercise } from 'src/app/models/exercises.model';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  static query(): Exercise {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  public query() {
    return _exercise;
  }
}

const _exercise = [
  {
    name: '3/4 Sit-Up',
    force: 'pull',
    level: 'beginner',
    mechanic: 'compound',
    equipment: 'body only',
    primaryMuscles: ['abdominals'],
    secondaryMuscles: [],
    instructions: [
      'Lie down on the floor and secure your feet. Your legs should be bent at the knees.',
      'Place your hands behind or to the side of your head. You will begin with your back on the ground. This will be your starting position.',
      'Flex your hips and spine to raise your torso toward your knees.',
      'At the top of the contraction your torso should be perpendicular to the ground. Reverse the motion, going only Â¾ of the way down.',
      'Repeat for the recommended amount of repetitions.',
    ],
    category: 'strength',
  },
  {
    name: 'Alternate Incline Dumbbell Curl',
    force: 'pull',
    level: 'beginner',
    mechanic: 'isolation',
    equipment: 'dumbbell',
    primaryMuscles: ['biceps'],
    secondaryMuscles: ['forearms'],
    instructions: [
      'Sit down on an incline bench with a dumbbell in each hand being held at arms length. Tip: Keep the elbows close to the torso.This will be your starting position.',
      'While holding the upper arm stationary, curl the right weight forward while contracting the biceps as you breathe out. As you do so, rotate the hand so that the palm is facing up. Continue the movement until your biceps is fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps. Tip: Only the forearms should move.',
      'Slowly begin to bring the dumbbell back to starting position as your breathe in.',
      'Repeat the movement with the left hand. This equals one repetition.',
      'Continue alternating in this manner for the recommended amount of repetitions.',
    ],
    category: 'strength',
  },
  {
    name: 'Barbell Full Squat',
    force: 'push',
    level: 'intermediate',
    mechanic: 'compound',
    equipment: 'barbell',
    primaryMuscles: ['quadriceps'],
    secondaryMuscles: ['calves', 'glutes', 'hamstrings', 'lower back'],
    instructions: [
      'This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack just above shoulder level. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.',
      'Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.',
      'Step away from the rack and position your legs using a shoulder-width medium stance with the toes slightly pointed out. Keep your head up at all times and maintain a straight back. This will be your starting position.',
      'Begin to slowly lower the bar by bending the knees and sitting back with your hips as you maintain a straight posture with the head up. Continue down until your hamstrings are on your calves. Inhale as you perform this portion of the movement.',
      'Begin to raise the bar as you exhale by pushing the floor with the heel or middle of your foot as you straighten the legs and extend the hips to go back to the starting position.',
      'Repeat for the recommended amount of repetitions.',
    ],
    category: 'strength',
  },
];
