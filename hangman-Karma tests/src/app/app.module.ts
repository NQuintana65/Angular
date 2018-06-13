import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaskPipe } from './mask.pipe';
import { LetterButtonsComponent } from './letter-buttons.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MaskPipe, LetterButtonsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
