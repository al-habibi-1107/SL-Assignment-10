import { HttpClient } from '@angular/common/http';
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
  
  constructor(private http: HttpClient) {

   }
}

export interface ToDoItem {
  name:string;
  status:string;

}

export interface MissionItem{
  mission_name:string;
  mission_id:string;
  website:string;
}
