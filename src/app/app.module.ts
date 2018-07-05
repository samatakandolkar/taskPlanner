import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import {NgDatepickerModule} from 'ng2-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    AddTasksComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
