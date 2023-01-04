import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //Create Variables for hold value
  taskObj: Todo = new Todo();
  taskArr: Todo[] = [];

  addTaskData: string = '';
  editTaskData: string = '';

  constructor(private api: TaskService) { }

  ngOnInit(): void {
    this.editTaskData = '';
    this.addTaskData = '';
    this.taskObj = new Todo();
    this.taskArr = [];
    this.getAllTask();
  }

  // Create Task Data
  addTask() {
    this.taskObj.task = this.addTaskData;
    this.api.addTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
      this.addTaskData = '';
    }, err => {
      alert(err);
    })
  }

  //Get All task Data
  getAllTask() {
    this.api.getAllTask().subscribe(res => {
      this.taskArr = res["hydra:member"];
    }, err => {
      alert('Unable to find task');
    })
  }

  // Edit todo Task
  editTask() {
    this.taskObj.task = this.editTaskData;
    this.api.editTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert('Unable to Update Task');
    })
  }

  // Delete task after complete
  deleteTask(task: Todo) {
    this.api.deleteTask(task).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert('Faild to Delete Task')
    })
  }

  //Edit property
  callEdit(task: Todo) {
    this.taskObj = task;
    this.editTaskData = task.task;
  }

}
