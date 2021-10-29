import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-testing';

  ngOnInit(): void {
    //setTimeout(() => this.title = 'Danik', 3000)
    console.log('OnInit')
    this.title = `Adnrey`
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }

  tasks = {
    name: [],
    status: []
  }

  addTask() {
    this.tasks.name.push(this.title)
    this.tasks.status.push(false)
    this.valueTask++
  }

  deleteTask(text) {
    const i = this.tasks.name.indexOf(text)
    // this.tasks.splice(0,1)

    if (i>-1){
      this.tasks.name.splice(i, 1)
      this.tasks.status.splice(i, 1)
      this.valueTask--
    }
    console.log(this.tasks, i)
  }

  endTask(text) {
    const i = this.tasks.name.indexOf(text)
    this.tasks.status[i] = !this.tasks.status[i]

    if(this.tasks.status[i]){
      this.tasks.name[i] = 'ВЫПОЛНЕНО: ' + this.tasks.name[i]
      this.valueTask--
    } else {
      this.tasks.name[i] = this.tasks.name[i].replace('ВЫПОЛНЕНО: ', '')
      this.valueTask++
    }

    console.log(this.tasks.status[i])
  }

valueTask = 0
  buttonSwich = 'ALL'









  // fnButtonSwich(b) {
  //   buttonSwich = b
  // }

}
