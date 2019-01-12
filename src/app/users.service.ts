import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {User} from './user';
const usersLocalStorageKey = 'users';

@Injectable()
export class UsersService {
  private static users: User[];
  constructor() { }
  public static getUsers(): Observable<User[]> {
    this.users = JSON.parse(localStorage.getItem(usersLocalStorageKey)) || [];
    return of(this.users);
  }
  private static createUser (username: string, userValue: number, userMessage: string): User {
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
      localStorage.setItem(usersLocalStorageKey, JSON.stringify(this.users));

      console.log('USERS', this.users);
    });
  }
}

