import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fixed'})

export class FixedPipe implements PipeTransform {
    transform(value: number=1, digits=2) {
        return value.toFixed(digits);
    }
}