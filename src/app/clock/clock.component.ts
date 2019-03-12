import { Component, OnInit } from '@angular/core';
import { Time } from '../time';
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  display: {
    hours: number,
    minutes: number,
    seconds: number,
    meridiem: string
  }
  
  time: {
    hours: number,
    minutes: number,
    seconds: number,
    meridiem: string
  }

  alarm: {
    hours: number,
    minutes: number,
    seconds: number
    meridiem: string
  }

  settingTime: number = 0;
  settingAlarm: number = 0;
  interval: any;

  constructor() { }

  ngOnInit() {

    this.time = {
      hours : 3,
      minutes: 4,
      seconds: 1,
      meridiem: "am" 
    }

    this.alarm = {
      hours : 4,
      minutes: 5,
      seconds: 6,
      meridiem: "am"
    }
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
      
      if (this.alarm.meridiem == this.time.meridiem && this.alarm.hours === this.time.hours) {
        setTimeout(() => {
          let alarm = new Audio('../assets/alarm-sound.mp3');
          alarm.play();
        }, this.alarm.minutes * 60 * 1000);
      }
    }

    let updateMinutes = () => {
      this.time.minutes++;
      if (this.time.minutes == 5) {
        this.time.minutes = 0;
        updateHours();
      }
    }

    this.interval = setInterval(() => {
      this.time.seconds++;
      if (this.time.seconds == 10) {
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
}

























  // setAlarm(): void {
    // if (this.settingAlarm === false) {
    //   clearInterval(this.intervalVal);
    //   this.saved["hours"] = this.hours;
    //   this.saved["minutes"] = this.minutes;
    //   this.saved["seconds"] = this.seconds;

    //   this.hours = this.alarmHours;
    //   this.minutes = this.alarmMinutes;
    //   this.seconds = this.alarmSeconds;
    //   this.settingAlarm = true;
    //   this.intervalVal = setInterval(this.updateSeconds, 1000);
    // } else {
    //   console.log(this.saved);
    //   this.hours = this.saved["hours"];
    //   this.minutes = this.saved["minutes"];
    //   this.seconds = this.saved["seconds"];
      
    //   // this.startTime();
    //   this.settingAlarm = false;
    // }
    // if (this.settingAlarm === false) {
    //   this.saved["seconds"] = this.seconds;
    //   this.seconds = this.alarmSeconds;
    //   this.settingAlarm = true;
    // } else {
    //   this.seconds = this.saved["seconds"];
    //   this.settingAlarm = false;
    // }
    

   

    
  // }

  // startTime(): void {
  //   console.log("this.startTime() called")
  //   this.settingTime = 0;
  //   this.intervalVal = setInterval(this.updateSeconds, 1000);
  // }

  // setTime(): void {
  //   clearInterval(this.intervalVal);
  //   if (this.settingTime == 1) {
  //     this.settingTime = 0;
      // this.startTime();
  //   } else {
  //     this.settingTime = 1;
  //   }
  // }

  // updateSeconds = () :void => {
  //   if (this.settingAlarm === true) {
  //     this.seconds = this.saved["seconds"];
  //   }

  //   this.seconds++;
  //   if (this.seconds === 60) {
  //       this.seconds = 0;
        // this.updateMinutes();
  //   }
  // }

  // updateMinutes(): void {
  //   if (this.settingAlarm === true) {
  //     this.minutes = this.saved["minutes"];
  //   }

  //   this.minutes++;
  //   if (this.minutes === 60) {
  //     this.minutes = 0;
  //     this.updateHours();
  //   }
  // }

  // updateHours(): void {
  //   this.hours++;
  //   if (this.hours == 13) {
  //     this.hours = 1;
  //     this.updateMeridiem();
  //   }
  // }

  // updateMeridiem(): void {
  //   this.meridiem = ( this.meridiem === "am") ? "pm" : "am";
  // }



  // setAutoTime(): void {
  //   clearInterval(this.intervalVal);
  //   console.log("Set auto time clicked");
  //   let today: Date = new Date();
  //   this.seconds = today.getSeconds();
  //   this.minutes = today.getMinutes();
  //   this.hours = (today.getHours() > 12) ? today.getHours() - 12 : today.getHours();
  //   this.meridiem = (today.getHours() >= 12) ? "pm" : "am";
  //   this.startTime();
  // }
// }
