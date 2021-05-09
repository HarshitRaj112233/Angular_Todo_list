import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css'],
})
export class ToDosComponent implements OnInit {
  title = 'To-Do';
  todos: Todo[];

  localitems: string;
  constructor() {
    this.todos = [];
    this.localitems = localStorage.getItem('todos');
    if (this.localitems == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localitems);
    }
  }

  ngOnInit(): void {}
  Deletetodo(todo: Todo) {
    console.log(todo);

    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    console.log(this.localitems);
  }
  TodoAdd(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  Toggle(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
