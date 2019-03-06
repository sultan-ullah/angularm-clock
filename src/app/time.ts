export class Time {
    seconds: number;
    minutes: number;
    hours: number;
    intervalVal = null;
    
    constructor(sec: number, min: number, hours: number) { 
        this.seconds = sec;
        this.minutes = min;
        this.hours = hours;
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
