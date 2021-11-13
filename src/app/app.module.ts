import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoDetailsComponent } from './to-do-details/to-do-details.component';
import { InputToDoComponent } from './input-to-do/input-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoDetailsComponent,
    InputToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
