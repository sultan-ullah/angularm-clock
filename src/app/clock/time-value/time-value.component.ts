import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-value',
  templateUrl: './time-value.component.html',
  styleUrls: ['./time-value.component.css']
})
export class TimeValueComponent implements OnInit {
  @Input() timeValue: number;
  @Input() settingTime: boolean;

  constructor() { }

  ngOnInit() {
    // this.settingTime = true;
    // this.timeValue = 0;
  }

}
