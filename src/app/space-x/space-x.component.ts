import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MissionItem, ToDoServiceService } from '../to-do-service.service';

@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.css']
})
export class SpaceXComponent implements OnInit {

  missionData: any;

  constructor(private http: HttpClient) {
   
      }

    

  ngOnInit(): void {
    
    this.http.get("https://api.spacexdata.com/v3/missions")
    .subscribe((data) => this.displaydata(data)); 
  }
  displaydata(data:any) {this.missionData = data;}
}
