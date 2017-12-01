import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'observables',
    template: `
        <p style="font-size: 150%">Result: <strong>{{result}}</strong></p>
        <p>Time: <strong>{{time}}</strong></p>
        <p>Error: <strong>{{error}}</strong></p>        
	    `
})
export class AppComponent {

    result;
    error;
    time;

    constructor() {
        const startTime = Date.now();
        this.add(5,2)
            .mergeMap(result => this.add(result,3))
            .mergeMap(result => this.add(result,1))
            .finally(()=>this.time= Date.now()-startTime)
            .subscribe(result => this.result = result,
                error=> this.error=error);
    }

    add(x,y): Observable<number> {
        return Observable.create(observer => {
            setTimeout(() => {
                const result = x + y;
                if (result >= 0) {
                    observer.next(result); 
                    observer.complete();                   
                } else {
                    observer.error('invalid value: '+ result);
                }
            }, 100);
        });
    }    
 }