import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LetterButtonsComponent } from './letter-buttons.component';
import { MaskPipe } from './mask.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, LetterButtonsComponent, MaskPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
