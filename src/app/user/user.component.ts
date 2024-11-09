import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import {NgForOf} from "@angular/common";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;
  selectedUser = DUMMY_USERS[randomIndex];
  get imagePath(){
    return 'assets/users/'+ this.avatar;
  }

  onSelectingUser(){
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
