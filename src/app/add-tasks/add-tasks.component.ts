import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AddTaskModel} from './add-task-model';
import {DatepickerOptions} from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {
  taskAddForm: FormGroup;
  public taskModel = new AddTaskModel();
  public statusArray;
  public taskArray;
  public options: DatepickerOptions;
  public successMessage: boolean = false;
  public errorMessage: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
    this.options = {
      minYear: 1970,
      maxYear: 2030,
      displayFormat: 'MM/DD/YYYY',
      barTitleFormat: 'MMMM YYYY',
      dayNamesFormat: 'dd',
      locale: enLocale,
      firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
      placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
      addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
      addStyle: {'background-color': 'white'}, // Optional, value to pass to [ngStyle] on the input field
      fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
      useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown
    };
  }

  createForm() {
    this.taskAddForm = this.formBuilder.group({
      taskName: ['', Validators.required],
      taskDescription: ['', Validators.required],
      taskCompletionDate: [new Date(Date.now()), Validators.required],
      taskStatus: ['Open', Validators.required]
    });
  }

  ngOnInit() {
    this.statusArray = ['Open', 'In-Progress', 'Closed'];
  }

  get name() {
    return this.taskAddForm.get('taskName');
  }

  get description() {
    return this.taskAddForm.get('taskDescription');
  }

  onSubmit() {
    if (this.taskAddForm.valid) {
      let tasks = JSON.parse(localStorage.getItem('TASKS') || '[]');
      tasks.push(this.taskAddForm.value);
      localStorage.setItem('TASKS', JSON.stringify(tasks));
      this.successMessage = true;
      this.errorMessage = false;

    } else {
      this.successMessage = false;
      this.errorMessage = true;
    }
  }

  onReset () {
    this.createForm();
    this.successMessage = this.errorMessage = false;
  }

}
