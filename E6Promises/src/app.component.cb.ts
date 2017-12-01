import { Component } from '@angular/core';

@Component({
    selector: 'promises',
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
        this.add(5,2, result => {
            this.add(result,-10, result =>{
                this.add(result, 1, result => {
                    this.result = result;
                    this.time = Date.now() - startTime;
                }, error => this.error=error);
            }, error => this.error=error);
        }, error => this.error=error);
    }

    add(x,y, callback, errorCallback) {
        setTimeout(()=> {
            const result = x + y;
            if (result >=0) {
                callback(result);
            } else {
                errorCallback('invalid value:' + result);
            }
        },100);
    }    
 }
