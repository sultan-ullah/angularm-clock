import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-value',
  templateUrl: './time-value.component.html',
  styleUrls: ['./time-value.component.css']
})
export class TimeValueComponent implements OnInit {
  @Input() timeValue: number;
  @Input() settingTime: boolean;
  @Output() incrementTimeValue = new EventEmitter();
  @Output() decrementTimeValue =  new EventEmitter();

  constructor() { }

  ngOnInit() {
    // this.settingTime = true;
    // this.timeValue = 0;
  }

  upArrowClicked() {
    this.incrementTimeValue.emit();
  }

  downArrowClicked() {
    this.decrementTimeValue.emit();
  }



}
