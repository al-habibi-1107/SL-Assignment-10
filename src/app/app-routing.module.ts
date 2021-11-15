import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceXComponent } from './space-x/space-x.component';
import { ToDoDetailsComponent } from './to-do-details/to-do-details.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
  {path:"todo-list",component:ToDoListComponent},
  {path:"todo-details",component:ToDoDetailsComponent},
  {path:"spacex-api",component:SpaceXComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
