import { Component, OnInit } from '@angular/core';
import { Time } from '../time';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  myTime: Time = new Time(0, 0, 0);

  constructor() { }

  ngOnInit() {
  }

  startTime = (): void => {
    console.log(this);
    this.myTime.startTime();
    console.log("start time button clicked");
  }

  stopTime = (): void => {
    this.myTime.stopTime();
    console.log("stop time button clicked");
  }

}
