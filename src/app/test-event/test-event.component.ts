import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-event',
  templateUrl: './test-event.component.html',
  styleUrls: ['./test-event.component.css']
})
export class TestEventComponent implements OnInit {

  greeting!:string;
  public name="";
  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
    console.log("Button Clicked!");
    this.greeting = "Welcome to the event handling page!"
  }
  logClick(v1:any){
    console.log(v1)
  }
}
