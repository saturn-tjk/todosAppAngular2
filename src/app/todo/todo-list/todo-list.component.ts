import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../shared/todo.service";
import {ToDo} from "../../shared/todo.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  constructor(public todoService:TodoService) {
  }

  todos: ToDo[];

  getTodos(): void {
   this.todos = this.todoService.getTodos();
  }

  deleteTodo(todo) {
    delete this.todos[this.todos.indexOf(todo)];
  }

  changeTodo (todo) {
    let index = this.todos.indexOf(todo);

    this.todos[index].title = todo.title;
    this.todos[index].updatedDate = new Date();
  }




  ngOnInit() {
  }

}
