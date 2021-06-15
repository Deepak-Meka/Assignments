import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {
  data=[
    {
      id:'101',
      name:'deepak',
      Gender:'Male',
      city:'Khammam'
    },
    {
      id:'102',
      name:'datta',
      Gender:'Male',
      city:'Hyderabad'
    },
    {
      id:'103',
      name:'Sriram',
      Gender:'Male',
      city:'karimnagar'
    },
    {
      id:'104',
      name:'hemanth',
      Gender:'Male',
      city:'nalagonda'
    },
  ]

}
