import { Component, OnInit, Input } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  @Input() userName: string = '';
  @Input() userMessage: string = '';
  @Input() userValue: number = 50;

  constructor() {
  }

  ngOnInit() {
  }

  public submitUserDetails(evt) {
    // do nothing if dont have data in all the fields
    if (!this.userName || !this.userMessage || !this.userValue) {
      return;
    }
    UsersService.addUser(this.userName, this.userValue, this.userMessage );
  }

}
