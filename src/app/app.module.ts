import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { formatTimeValuePipe } from './formatTimeValue.pipe';
import { TimeValueComponent } from './time-value/time-value.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    formatTimeValuePipe,
    TimeValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
