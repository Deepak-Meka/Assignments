import { Component, OnInit } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent  {
  nameUsingSearch=''
  // sort=''
         info=[
           {
             id:101,
             name:'Harley davidson',
             price:10000000,
             MyDate:new Date(2025,18,4),
             myImage:'../assets/har.jpg'
           },
           {
            id:102,
            name:'Thunder bird',
            price:12000000,
            MyDate:new Date(2027,17,7),
            myImage:'../assets/thunder.jpg'
          },
          {
            id:103,
            name:'Yamaha',
            price:140000,
            MyDate:new Date(2029,17,6),
            myImage:'../assets/yamaha.jpg'
          },
          {
            id:104,
            name:'Tvs',
            price:100000,
            MyDate:new Date(2027,18,4),
            myImage:'../assets/tvs.jpg'
          },
          {
            id:105,
            name:'Honda',
            price:180000,
            MyDate:new Date(2030,18,4),
            myImage:'../assets/honda.jpg'
          }
         ]
 

}
