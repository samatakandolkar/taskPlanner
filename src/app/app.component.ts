import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showAddForm: boolean = false;
  public showAllTask: boolean = false;

  addTasks() {
    this.showAddForm = true;
    this.showAllTask = false;
  }

  allTasks() {
    this.showAddForm = false;
    this.showAllTask = true;
  }
}
