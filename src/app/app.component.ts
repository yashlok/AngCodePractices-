import { Component } from '@angular/core';

// sould have space for own library
import { Iproduct } from './products';


//import {product} from './products';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'miniproject';
  parentMsg:string="My perent Message";
  ReceiverMessage(event)
  {
    console.log("Message1");
  }
  product: Iproduct[] = [{
    "id": 1,
    "name": "TV",
    "imageUrl": "/assets/image/download.png",
    "amount": 8000,
    "date": new Date(),
    "size": 5

  },
  {
    "id": 2,
    "name": "mobile",
    "imageUrl": "/assets/image/download.png",
    "amount" :5000,
    "date": new Date(),
    "size": 2
  }
  ]
};