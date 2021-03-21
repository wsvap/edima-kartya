import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'edima-kartya';
  cardNumber: number | undefined;
  cardOwner = '';
  cardExpYear: number | undefined;
  cardExpMonth: number | undefined;
  cardCVV: number | undefined;
  cardPhone: number | undefined;




}
