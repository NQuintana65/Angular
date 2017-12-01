import { Component, Inject } from '@angular/core';
import { TimeService } from './time.service';

@Component({
    selector: 'current-time',
    template: '<strong>{{time}}</strong>'
    })
export class TimeComponent {

        constructor(@Inject(TimeService) timeService) {
            timeService.subscribe(time => this.time = time.toLocaleTimeString(),1000);    
        }

    }




