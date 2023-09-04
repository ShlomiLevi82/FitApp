import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  _id: string;
  name: string;
  email: string;
  username: string;
  isAdmin: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = {
    _id: 'u101',
    name: 'Fitguy',
    email: 'fitguy@email.com',
    username: 'fitguy',
    isAdmin: true,
  };

  constructor() {}

  private _loggedInUser$ = new BehaviorSubject<User | null>(this.user);
  // private _loggedInUser$ = new BehaviorSubject<User | null>(null)
  public loggedInUser$ = this._loggedInUser$.asObservable();

  getLoggedInUser() {
    return this._loggedInUser$.value;
  }
}
