import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {
   toDoList:ToDoItem[] =[{
    name:"Work Work Work",
    status:"Done"
   },{
    name:"Assignment",
    status:"Pending"
   },
   {
    name:"Attend Classes",
    status:"Pending"
   }
  ]
  addToDo(newToDo:ToDoItem){
    this.toDoList.push(newToDo);
  }
  getToDos(){
    return this.toDoList;
  }
  constructor() { }
}

export interface ToDoItem {
  name:string;
  status:string;

}
