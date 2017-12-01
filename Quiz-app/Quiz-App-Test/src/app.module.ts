import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuizService } from './quiz.service';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [AppComponent],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
