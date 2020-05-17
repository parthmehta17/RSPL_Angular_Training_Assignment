import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

  public Num1 : number;
  public Num2 : number;
  public result : number;

  add()
  {
    this.result = this.Num1 + this.Num2;
  }
  sub()
  {
    this.result = this.Num1 - this.Num2;
  }
  mul()
  {
    this.result = this.Num1 * this.Num2;
  }
  div()
  {
    this.result = this.Num1 / this.Num2;
  }
}
