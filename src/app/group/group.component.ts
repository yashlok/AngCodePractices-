import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  countryDetails:any[]=[

    {'country':'India',
     'people':[
       {
       'name':"Ram kumar"
       },
       {
         'name':"Shyam kumar"
       },
       {
         'name':"Shiv kumar"
       }

     ]
  },
  {'country':'US',
     'people':[
       {
       'name':"Ravi kumar"
       },
       {
         'name':"sanjay kumar"
       },
       {
         'name':"Sujeet kumar"
       }

     ]
  },
  ]

}
