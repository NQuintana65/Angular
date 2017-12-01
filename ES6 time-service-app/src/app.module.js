import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {TimeService } from './time.service';
import {TimeComponent } from './time.component';
import {AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, TimeComponent],
    providers: [TimeService],
    bootstrap: [AppComponent]
})
export class AppModule { }

