import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'observables',
    template: `
        <p style="font-size: 150%">Result: <strong>{{result}}</strong></p>  
	    `
})
export class AppComponent {

    result;

    constructor() {
        this.countDown(5)
            .subscribe(result => this.result = result, null, ()=> this.result = 'Complete!');
    }

    countDown(start): Observable<number> {
        return Observable.create(observer => {
            let counter = start;
            observer.next(counter--);            
            const intervalId = setInterval(() => {
                if (counter > 0) {
                    observer.next(counter--);              
                } else {
                    observer.complete();      
                }   
            }, 1000);
        });
    }   
     
 }