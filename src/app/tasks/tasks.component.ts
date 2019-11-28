import { Component, OnInit } from '@angular/core';
import  *  as  data  from  '../data.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  mockData: any  = (data  as  any).default;

  show: boolean = false;
  value: string;
  id: number;
  

  constructor(private router: Router ) {}

  remove(id) {
    this.mockData = this.mockData.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }



  create(item) {
    this.mockData.push({
      id: Date.now(),
      title: item,
      done: false,
      date: new Date()
    });
  }

  update(title) {
    this.mockData.map(item => {
      if (item.id === this.id) {
        item['title'] = title;
      }
    });

    this.show = false;
  }

  edit(id, title) {
    this.show = true;
    this.value = title;
    this.id = id;
  }

  setTaskComplete(id) {
    this.mockData.map(item => {
      if (item.id === id) {
        item['done'] = true;
      }
    });
  }

  ngOnInit() {
  }

}