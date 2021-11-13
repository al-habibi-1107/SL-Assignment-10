import { Component, OnInit } from '@angular/core';
import { ToDoItem, ToDoServiceService } from "../to-do-service.service";
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

toDoList:ToDoItem[]=[] 
  constructor(toDoService: ToDoServiceService) {
   this.toDoList = toDoService.getToDos()
   }
  
   

  ngOnInit(): void {
  }

}
