import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styles: ['span { color: blue; }']
})
export class OddComponent {
  @Input()
  currentNumber: number;

  constructor() { }
}