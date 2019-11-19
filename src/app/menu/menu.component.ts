import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public title: string = "To pio omorfo menu tou kosmou!";
  public num: number = 500;

  // menu: Array<string>
  public menu: string[] = ["Start",
       "About",
      "Products",
      "Contact"];
}
