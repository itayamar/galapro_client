import { Component, OnInit, Input } from '@angular/core';

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
    // Todo Submit user
    console.log(this.userName,this.userValue, this.userMessage);
  }

}
