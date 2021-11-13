import { Component, OnInit } from '@angular/core';
import { ToDoServiceService } from '../to-do-service.service';

@Component({
  selector: 'app-input-to-do',
  templateUrl: './input-to-do.component.html',
  styleUrls: ['./input-to-do.component.css']
})
export class InputToDoComponent implements OnInit {
  addToDo:any
  constructor(toDoService:ToDoServiceService) { 
    toDoService.addToDo({name:"new",status:"Pending"});
  }

  ngOnInit(): void {
  }

}
