import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import * as EventEmitter from 'node:events';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheck: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  Click(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('Click Triggered');
  }
  Oncheck(todo) {
    this.todoCheck.emit(todo);
  }
}
