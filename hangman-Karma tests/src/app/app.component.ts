import { Component } from '@angular/core';
import { LetterButtonsComponent } from './letter-buttons.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>Guess The Word</h1>
    <p>{{solution | mask:selection}}</p>
    <letter-buttons [(selection)]="selection"></letter-buttons>
  `
})
export class AppComponent {

  solution = 'ANGULAR';
  selection = '';

}
