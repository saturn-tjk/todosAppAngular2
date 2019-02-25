import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ToDo} from "../shared/todo.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor( private router: Router ) { }

  showTodoDetail(input): ToDo {
    if ( !input && !input.isNumber() ) return;
    this.router.navigate( ['/todo/detail/', input.value] );
    input.value = '';

  }

  ngOnInit() {
  }

}
