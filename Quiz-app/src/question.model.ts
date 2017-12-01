import { altChoice } from './altChoices.model';

export interface Question {
  id: string;
  text: string;
  options: altChoice[];
  solution: string;
 }
 