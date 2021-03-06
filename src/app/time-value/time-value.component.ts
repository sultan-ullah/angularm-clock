import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-value',
  templateUrl: './time-value.component.html',
  styleUrls: ['./time-value.component.css']
})
export class TimeValueComponent implements OnInit {
  @Input() timeValue: number;
  @Input() settingTime: number;
  @Input() settingAlarm: number;
  @Output() incrementTimeValue = new EventEmitter();
  @Output() decrementTimeValue =  new EventEmitter();

  constructor() { }

  ngOnInit() {}

  upArrowClicked() {
    this.incrementTimeValue.emit();
  }

  downArrowClicked() {
    this.decrementTimeValue.emit();
  }
}
