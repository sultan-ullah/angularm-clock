import { Component, OnInit } from '@angular/core';
import { Time } from '../time';
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  display = null;
  time = null;
  alarm = null;

  settingTime: number = 0;
  settingAlarm: number = 0;
  interval: any;
  
  hoursMatch: boolean = false;

  constructor() { }

  ngOnInit() {
    this.time = {hours : 3, minutes: 4, seconds: 1, meridiem: "am" }
    this.alarm = {hours : 4, minutes: 5, seconds: 6, meridiem: "am"}
    this.displayTime();
    this.startTime();
  }

  displayTime() {
    this.display = this.time;
  }

  displayAlarm() {
    this.display = this.alarm;
  }

  setTime() {
    this.settingAlarm = 0;
    if (this.settingTime == 1) {
      this.settingTime = 0;
      this.startTime()
    } else {
      this.stopTime();
      this.displayTime();
      this.settingTime = 1;
    }
  }

  setAlarm() {
    if (this.settingAlarm === 1) {
      this.settingAlarm = 0;
      this.displayTime();
    } else {
      this.settingAlarm = 1;
      this.displayAlarm();
    }
  }

  startTime() {
    this.settingTime = 0;
    this.settingAlarm = 0;
    this.displayTime();

    let updateHours = () => {
      this.time.hours++;

      if (this.time.hours == 13) {
        this.time.hours = 12;
        this.time.meridiem = (this.time.meridiem === "am") ? "pm" : "am";
      }
    }

    let updateMinutes = () => {
      this.time.minutes++;

      if (this.time.minutes === this.alarm.minutes &&
        this.time.hours === this.alarm.hours &&
        this.time.meridiem === this.alarm.meridiem) {
          this.playAlarm();
        }

      if (this.time.minutes === 60) {
        this.time.minutes = 0;
        updateHours();
      }
    }
    
    this.interval = setInterval(() => {

      this.time.seconds++;

      if (this.time.seconds === 60) {
        this.time.seconds = 0;
        updateMinutes();
      }
    }, 1000);
  }

  stopTime() {
    clearInterval(this.interval);
  }

  setAutoTime() {
    this.stopTime();
    let today = new Date();
    this.time.seconds = today.getSeconds();
    this.time.minutes = today.getMinutes();
    this.time.hours = (today.getHours() > 12) ? today.getHours() - 12 : today.getHours();
    this.time.meridiem = (today.getHours() >= 12) ? "pm" : "am";
    this.startTime();
  }

  increment (type: string) : void {
    if (type == "seconds" || type == "minutes") {
      this.display[type]++;
      if (this.display[type] == 60) {
        this.display[type] = 0;
      }
    } else if (type == "hours") {
      this.display[type]++;
      if (this.display[type] == 13) {
        this.display[type] = 1;
        this.display["meridiem"] = this.display["meridiem"] == "am" ? "pm" : "am";
      }
    }
  }

  decrement = (type: string) : void => {
    if (type == "seconds" || type == "minutes") {
      this.display[type]--;
      if (this.display[type] == -1) {
        this.display[type] = 59;
      }
    } else if (type == "hours") {
      this.display[type]--;
      if (this.display[type] == 0) {
        this.display[type] = 12;
        this.display["meridiem"] = this.display["meridiem"] == "am" ? "pm" : "am";
      }
    }
  }

  playAlarm(){
    let audio = new Audio();
    audio.src = "../../assets/alarm-sound.mp3";
    audio.load();
    audio.play();
  }

}

