import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  inputs: ['task']
})
export class TaskDetailComponent implements OnInit {
  task : any;
  @Output() close = new EventEmitter<void>();

  constructor() { }
  
  ngOnInit() {
  }

  
  onClose() {
    this.close.emit()
  }
}
