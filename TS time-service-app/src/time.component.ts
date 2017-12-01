import { Component } from '@angular/core';
import { TimeService } from './time.service';

@Component({
    selector: 'current-time',
    template: '<strong>{{time}}</strong>'
    })
export class TimeComponent {
		time: string;
        constructor(timeService: TimeService) {
			timeService.subscribe(time => this.time = time.toLocaleTimeString(), 1000);    
		}
    }




