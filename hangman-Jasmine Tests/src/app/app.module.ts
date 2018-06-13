import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaskPipe } from './mask.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MaskPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
