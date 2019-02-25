import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {ToDo} from "../../../shared/todo.model";


@Component({
  selector: 'app-todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls: ['todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  editMode: Boolean = false;

  @Output() deleted = new EventEmitter<ToDo>();
  @Output() changed = new EventEmitter<ToDo>();
  @Input() todo;
  @Input() id;

  constructor() { }

  switchEditMode():Boolean  {
    return this.editMode = !this.editMode;
  }

  onDeleted() {
    this.deleted.emit(this.todo);
  }

  onChanged () {
    this.changed.emit(this.todo);
  }

  ngOnInit() {
  }

}
