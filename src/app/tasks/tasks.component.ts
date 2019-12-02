import { Component, OnInit } from '@angular/core';
import  *  as  data  from  '../data.json';
import * as _ from 'lodash';

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
  selectedTask = {};
  datagrouped = _.groupBy(this.mockData, "date");

  constructor() {}
  
// entry data grouping function
  group(arr:any){
    let dates:any = {};
    arr.forEach((data) => {
      dates[data.date] = null;
    });
    dates = Object.keys(dates);
  
    let datagrouped = {};
    dates.forEach((date) => {
      datagrouped[date] = arr.reduce((dataArr, data) => {
        if(data.date == date){
          dataArr.push(data);
        }

        return dataArr;
      }, []);
    });
  }

 // choose object from ngFor results

  onSelect(task) {
    this.show = true;
    this.selectedTask = task;
  }

  // remove task from list

  remove(id) {
    this.mockData = this.mockData.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
    this.datagrouped = _.groupBy(this.mockData, "date");
  }

 // create new task

  create(item) {
    this.mockData.unshift({
      id: Date.now(),
      title: item,
      done: false,
      date: this.formatDate(new Date())
    });
    this.datagrouped = _.groupBy(this.mockData, "date");

  }



  // update(title) {
  //   this.mockData.map(item => {
  //     if (item.id === this.id) {
  //       item['title'] = title;
  //     }
  //   });

  //   this.show = false;
  // }


   // remove task from list

  // edit(id, title) {
  //   this.show = true;
  //   this.value = title;
  //   this.id = id;
  // }


  // 

// Save and close task edition window

  onHandleClose(){
    this.show = !this.show;
    this.datagrouped = _.groupBy(this.mockData, "date");
  }


// date formatting function

  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }


  ngOnInit() {
  }


}