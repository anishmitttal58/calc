import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  allBlogs:any=[
    {id:1, title:"abc", description:"hello abc"},
    {id:2, title:"bcd", description:"hello bcd"},
    {id:3, title:"def", description:"hello def"}
  ];
  constructor() {
    console.log("Home Component Constructor");
   }
  
  ngOnInit(): void {
    console.log("Home Component Created");
  }
  ngOnDestroy():void{
    console.log("Home Component Destroyed");
  }

}
