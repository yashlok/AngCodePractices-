import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }
@Input() item:Iproduct;
  ngOnInit() {
  }

}
