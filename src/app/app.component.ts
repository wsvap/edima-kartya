import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'edima-kartya';
  cardNumber: number | undefined;
  cardOwner = '';
  cardExpYear: number | undefined;
  cardExpMonth: number | undefined;
  cardCVV: number | undefined;
  cardPhone: number | undefined;

  focusCVV = false;

  ngOnInit(): void {
  }

  // Card flip on CVV focus
  onCVVFocus(): void {
    this.focusCVV = true;
  }
  onCVVBlur(): void {
    this.focusCVV = false;
  }

}
