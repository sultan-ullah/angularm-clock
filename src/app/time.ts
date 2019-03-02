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
    }

    private updateMinutes = (): void => {
        this.minutes++;
      
        if (this.minutes === 3) {
          this.minutes = 0;
          this.updateHours();
        }
    }
    
    private updateHours = (): void => {
        this.hours++;
      
        if (this.hours === 3) {
          this.hours = 0;
        }
    }

    increment = (type: string) => {
        if (type === 'seconds') {
            this.seconds++;
        } else if (type === "minutes") {
            this.minutes++;
        } else if (type === "hours") {
            this.hours++;
        }
    }    

    decrement = (type: string) => {
        if (type === 'seconds') {
            this.seconds--;          
        } else if (type === "minutes") {
            this.minutes--;
        } else if (type === "hours") {
            this.hours--;
        }
    }
}
