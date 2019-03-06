import { Component, OnInit } from '@angular/core';
import { Time } from '../time';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  seconds: number = 0;
  minutes: number = 0;
  hours: number = 12;
  intervalVal = null;
  settingTime: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  startTime = (): void => {
    this.settingTime = false;
    this.intervalVal = setInterval(this.updateSeconds, 1000);
  }

  // stopTime = (): void => {
  //   
  // }

  setTime = (): void => {
    clearInterval(this.intervalVal);
    if (this.settingTime) {
      this.settingTime = false;
    } else {
      this.settingTime = true;
    }
    
  }

  updateSeconds = (): void => {
    this.seconds++;

    if (this.seconds === 3) {
        this.seconds = 0;
        if ( this.settingTime === false) {
          this.updateMinutes();
        }
    }
  }

  updateMinutes = (): void => {
    this.minutes++;
    if (this.minutes === 3) {
      this.minutes = 0;
      if ( this.settingTime === false) {
        this.updateHours();
      }
    }
  }

  updateHours = (): void => {
    this.hours++;

    if (this.hours === 3) {
      this.hours = 0;
    }
  }

  increment = (event, type: string): void => {
    if (type === "seconds") {
      this.updateSeconds();
    } else if (type === "minutes") {
      this.updateMinutes();
    } else if (type === "hours") {
      this.updateHours();
    }
  }

  decrement = (event, type: string): void => {
    if (type === "seconds") {
      this.seconds--;

      if (this.seconds === 0) {
        this.seconds = 59;
      }

    } else if (type === "minutes") {
      this.minutes--;

      if (this.minutes === 0) {
        this.minutes = 59;
      }

    } else if (type === "hours") {
      this.hours--;

      if (this.hours === 0) {
        this.hours = 12;
      }

    }
  }


}
