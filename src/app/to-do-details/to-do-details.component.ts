import { Component, OnInit } from '@angular/core';
import { ToDoItem, ToDoServiceService } from '../to-do-service.service';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.css']
})
export class ToDoDetailsComponent implements OnInit {

  toDos:ToDoItem[]=[]
  constructor(toDoService: ToDoServiceService) { 
    this.toDos = toDoService.getToDos();
  }

  ngOnInit(): void {
  }

}
