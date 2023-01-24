import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
     list:any[]=[];
     addTodo(item:any){
      this.list.push({id:this.list.length,name:item})
      console.log(this.list)
     
     }
     remove(id:number){
      this.list= this.list.filter(item=>item.id!==id)
     }
}
