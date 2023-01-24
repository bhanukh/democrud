import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  tittle="Counter";
 count=0;
 color="green";
 display=true
 updateColor(){
  this.color="black"
 }
 counter(type:string){
  type=== 'inc' ? this.count++ : this.count--
 }
 toggle(){
   this.display=!this.display
 }
}
