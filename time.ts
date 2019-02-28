export class Time {
    seconds: number;
    minutes: number;
    hours: number;
    secondStr: string = "";
    minuteStr: string = "";
    hourStr: string = "";
    intervalVal = null;
    
    constructor(sec: number, min: number, hours: number) { 
        this.seconds = sec;
        this.minutes = min;
        this.hours = hours; 
    }

    public startTime = (): void => {
        this.intervalVal = setInterval(this.updateSeconds, 1000);
    }

    public stopTime = (): void => {
        clearInterval(this.intervalVal);
    }

    private updateSeconds = (): void => {
        this.seconds++;

        if (this.seconds === 3) {
            this.seconds = 0;
            this.updateMinutes();
          }
          this.secondStr = this.padZero(this.seconds);
    }

    private updateMinutes = (): void => {
        this.minutes++;
      
        if (this.minutes === 3) {
          this.minutes = 0;
          this.updateHours();
        }
        this.minuteStr = this.padZero(this.minutes);
    }
    
    private updateHours = (): void => {
        this.hours++;
      
        if (this.hours === 3) {
          this.hours = 0;
        }
        this.hourStr = this.padZero(this.hours);
    }

    private padZero = (num: number): string => {
        return (String(num).length === 1) ? "0" + num : "" + num; 
    }
}
