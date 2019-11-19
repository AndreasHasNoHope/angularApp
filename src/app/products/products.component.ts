import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: IProduct[] = [
    {
      id: 1,
      name: 'Core i3',
      price: 300,
      sale: 250,
      photo: 'assets/images/image.jpg'
    },
    {
      id: 2,
      name: 'Core i5',
      price: 500,
      sale: null,
      photo: 'assets/images/image.jpg'
    },
    {
      id: 3,
      name: 'Core i7',
      price: 700,
      sale: null,
      photo: 'assets/images/image.jpg'
    },
    {
      id: 4,
      name: 'Core i9',
      price: 900,
      sale: null,
      photo: 'assets/images/image.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
