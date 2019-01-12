import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../user';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  users: User[];
  constructor() { }

  syncUsers() {
    UsersService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  ngOnInit() {
    this.syncUsers();
  }

}
