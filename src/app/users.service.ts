import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

import {User} from './user';

const usersLocalStorageKey = 'users';

@Injectable()
export class UsersService {
  private static users: User[];

  constructor(private _http: Http) {}

  public static getUsers(): Observable<User[]> {
    //step 1
    this.users = JSON.parse(localStorage.getItem(usersLocalStorageKey)) || [];
    return of(this.users);

    //step 2
    // todo: Fix error Property '_http' does not exist on type 'typeof UsersService'
    //return this._http.get('http://localhost:3000/users')
    //  .map((res: Response) => <User[]>res.json());
  }

  private static createUser(username: string, userValue: number, userMessage: string): User {
    return {
      name: username,
      value: userValue,
      message: userMessage
    };
  }

  public static addUser(userName: string, userValue: number, userMessage: string): void {
    let userToAdd = this.createUser(userName, userValue, userMessage);
    this.getUsers().subscribe((users: User[]) => {
      this.users = users;
      this.users.push(userToAdd);

      //step 1
      localStorage.setItem(usersLocalStorageKey, JSON.stringify(this.users));

      //step 2
      // todo: Fix error Property '_http' does not exist on type 'typeof UsersService'
      //this._http.post('http://localhost:3000/users', userToAdd);
    });
  }

}

