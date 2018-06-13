import {TestBed } from '@angular/core/testing';
import { LetterButtonsComponent } from './letter-buttons.component';

describe('LetterButtonsComponent', () => {

 beforeEach(()=> {
      TestBed.configureTestingModule({
          declarations: [LetterButtonsComponent]
      });
  });
  
  it ('should display a button for each letter of the alphabet'), () => {
      const fixture = TestBed.createComponent(LetterButtonsComponent);
      //const component = fixture.componentInstance;
      console.log('fixture:', fixture);
  }

  });