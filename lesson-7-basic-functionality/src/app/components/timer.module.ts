import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OddComponent } from './timer/odd/odd.component';
import { EvenComponent } from './timer/even/even.component';
import { TimerControlComponent } from './timer/timer-control/timer-control.component';
import { TimerDashboardComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimerControlComponent,
    OddComponent,
    EvenComponent,
    TimerDashboardComponent
  ],
  exports: [
    TimerDashboardComponent
  ]
})
export class TimerModule { }