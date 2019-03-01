import { Pipe, PipeTransform } from '@angular/core'
import { Time } from './time';

@Pipe({name: 'formatTimeValue'})
export class formatTimeValuePipe implements PipeTransform {
    transform(value: number): string {
        console.log(value);
        return (String(value).length === 1) ? "0" + value : "" + value;    
    }
}