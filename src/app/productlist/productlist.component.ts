import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Iproduct } from '../products';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productList: Iproduct[];
  constructor(private _service: ProductsService) { }
  @Input() childMsg: string;
  @Output() eventMessage = new EventEmitter<string>();
  ngOnInit() {
    this._service.getProducts().subscribe(res => {
      this.productList = res;
    })
  }
  SendMessage() {
    this.eventMessage.emit("Hello");
  }
  //   product: Iproduct[] = [{
  //     "id": 1,
  //     "name": "TV",
  //     "imgUrl": "/assets/image/download.png",
  //     "amount": 8000,
  //     "date": new Date(),
  //     "size": 5

  //   },
  //   {
  //     "id": 2,
  //     "name": "mobile",
  //     "imgUrl": "/assets/image/download.png",
  //     "amount" :5000,
  //     "date": new Date(),
  //     "size": 2
  //   }
  //   ]
}


