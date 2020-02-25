import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit, OnDestroy {

  constructor() {
    console.log("Create Component Constructor");
   }

  ngOnInit(): void {
    console.log("Create Component Created");
  }
  ngOnDestroy():void{
    console.log("Create Component Destroyed");
  }

}
