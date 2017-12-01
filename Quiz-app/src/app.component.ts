import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { altChoice } from './altChoices.model';
import { Question } from './question.model';
import { QuizService } from './quiz.service';

@Component({
  selector: 'quiz-app',
  template: `
    <div>
        <ul style="list-style:none;">
            <li *ngFor="let questn of quiz; let idx = index">
                <strong>{{idx+1}}. {{questn.text}}</strong>
                <ul style="list-style:none;" >                    
                    <li *ngFor="let alternativeChoice of questn.options">
                        <input type="radio" 
                               [(ngModel)]="questn.id"
                               value={{alternativeChoice.id}} 
                               name={{questn.id}} 
                              (change)="onSelectionChange(questn.id)">
                            {{alternativeChoice.text}}   
                    </li>                    
                </ul>
                <div *ngIf="checking && getGoodAnswer(idx)">✔ Correct</div>
                <div *ngIf="checking && !getGoodAnswer(idx)">✘ Incorrect </div>
                <br/>   
            </li>
        </ul>                
    </div>
    <p *ngIf="!checking">
    <button (click)="ReviewAnswers()">Check</button>
    </p>
    <p *ngIf ="checking">
        Score: {{score}}/{{questionCnt}}
        ({{score/questionCnt | percent}})
    </p>
  `
})

export class AppComponent { 
    quiz: Question[];
    checking=false;
    score: number;
    questionCnt: number;
    goodAnswer: boolean[] = [];
    
    constructor(quizService: QuizService){        
        this.quiz = quizService.questions;
        this.questionCnt = quizService.questions.length;
        console.info('questions count is ', this.questionCnt);        
        this.score = 0; 
        for(var i= 0; i < this.questionCnt; i++) {
            this.setGoodAnswer(i, false);
            console.info(this.getGoodAnswer(i));
        }
    }
        
    ReviewAnswers(){
        console.info('check answers');
        this.checking = true;        
    }
    
    Correct(answer: string) { 
        var tmpVal: boolean;
        var indx: number=0;
        for(var key in this.quiz)
        {
            tmpVal = (this.quiz[key].solution === answer);   
            indx = Number(key);
            console.info(tmpVal);
            if (tmpVal) {
                console.info(tmpVal+':'+indx);
                this.setGoodAnswer(indx, tmpVal);
                this.score++;
                return true;
            }
        } 
        return false;
    }
    
    getScoreFraction() {
        return this.score+'/'+this.questionCnt;
    }
    
    onSelectionChange(entry) {     
        this.Correct(entry)
        console.info('score:', this.score); 
    }
    getGoodAnswer(I:number) {
        return this.goodAnswer[I];
    }
    setGoodAnswer(I: number, B: boolean) {
        this.goodAnswer[I] = B;
    }
}

