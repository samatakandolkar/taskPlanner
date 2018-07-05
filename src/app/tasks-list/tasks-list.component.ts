import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  public taskList;
  public today;

  constructor() {
  }

  ngOnInit() {
    let tempTasks = [];
    this.taskList = JSON.parse(localStorage.getItem('TASKS') || '[]');
    this.today = new Date(Date.now());
    console.log(this.taskList);
    for (let task of this.taskList) {
      let taskClass;
      if (task.taskStatus === 'Closed') {
        taskClass = 'closed-task';
      }
      if (task.taskStatus === 'Open') {
        taskClass = 'open-task';
      }
      if (task.taskStatus === 'In-Progress') {
        taskClass = 'inprogress-task';
      }
      if (task.taskStatus != 'Closed' && new Date(task.taskCompletionDate).getDate() <= this.today.getDate()) {
        taskClass = 'pending-task';
      }
      let tempObj = {
        name: task.taskName,
        desc: task.taskDescription,
        status: task.taskStatus,
        date: task.taskCompletionDate,
        class: taskClass
      };
      tempTasks.push(tempObj);
    }
    this.taskList = tempTasks;
  }

}
