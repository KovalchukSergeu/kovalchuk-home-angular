import { Component} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class TimerDashboardComponent {

  constructor() { }

  arrayNumber: number[] = [];

  handleEdit(event) {
    this.arrayNumber.push(event); 
  }
}