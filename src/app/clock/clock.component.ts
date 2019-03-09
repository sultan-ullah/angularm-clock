import { Component, OnInit } from '@angular/core';
import { Time } from '../time';
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  seconds: number = 59;
  minutes: number = 59;
  hours: number = 12;
  intervalVal = null;
  settingTime: number = 0;
  meridiem: string = 'pm';

  settingAlarm: boolean = false;
  alarmSeconds: number = 0;
  alarmMinutes: number = 0;
  alarmHours: number = 12;
  alarmMeridiem: string = "am";

  constructor() { }

  ngOnInit() {
  }

  setAlarm(): void {
    this.setTime();
    this.settingAlarm = true;

  }

  startTime(): void {
    console.log("this.startTime() called")
    this.settingTime = 0;
    this.intervalVal = setInterval(this.updateSeconds, 1000);
  }

  setTime(): void {
    clearInterval(this.intervalVal);
    if (this.settingTime == 1) {
      this.settingTime = 0;
      this.startTime();
    } else {
      this.settingTime = 1;
    }
  }

  updateSeconds = () :void => {
    this.seconds++;
    if (this.seconds === 60) {
        this.seconds = 0;
        this.updateMinutes();
    }
  }

  updateMinutes(): void {
    this.minutes++;
    if (this.minutes === 60) {
      this.minutes = 0;
      this.updateHours();
    }
  }

  updateHours(): void {
    this.hours++;
    if (this.hours == 13) {
      this.hours = 1;
      this.updateMeridiem();
    }
  }

  updateMeridiem(): void {
    this.meridiem = ( this.meridiem === "am") ? "pm" : "am";
  }

  increment = (type: string) : void => {
    if (type === "seconds") {
      if (this.seconds + 1 === 60) {
        this.seconds = 0;
      } else {
        this.seconds++;
      }
    } else if (type === "minutes") {
      if (this.minutes + 1 === 60) {
        this.minutes = 0;
      } else {
        this.minutes++;
      }
    } else if (type === "hours") {
      if (this.hours + 1 === 13) {
        this.hours = 1;
        this.updateMeridiem();
      } else {
        this.hours++;
      }
    }
  }

  decrement = (type: string) : void => {
    console.log("up arrow clicked:" + type);
    if (type === "seconds") {
      if (this.seconds - 1 === -1) {
        this.seconds = 59;
      } else {
        this.seconds--;
      }
    } else if (type === "minutes") {
      if (this.minutes - 1 === -1) {
        this.minutes = 59;
      } else {
        this.minutes--;
      }
    } else if (type === "hours") {
      if (this.hours - 1 === 0) {
        this.hours = 12;
        this.updateMeridiem();
      } else {
        this.hours--;
      }
    }
  }

  setAutoTime(): void {
    clearInterval(this.intervalVal);
    console.log("Set auto time clicked");
    let today: Date = new Date();
    this.seconds = today.getSeconds();
    this.minutes = today.getMinutes();
    this.hours = (today.getHours() - 12);
    this.startTime();
  }
}
