import {Component, EventEmitter, Output} from '@angular/core';
import {User} from "../user.interface";


@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.css']
})

export class FormAppComponent {

  @Output()
  update: EventEmitter<User> = new EventEmitter<User>();

  userExample: User = {
    userData: {
      userName: '',
      email: ''
    },
    secretQuestion: ['Brand of your first car', "Pet's name", "Mother second name"],
    answerQuestion: '',
    gender: ['Male', 'Female']
  };

  proposeUser(nameInput): string {
    return nameInput.value = 'John Doe';
  }

  onSubmit(user: User, isValid: boolean) {
    if (isValid) {
      this.update.emit(user);
    }
  }
}
