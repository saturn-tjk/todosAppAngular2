import {Component, OnInit, OnDestroy} from '@angular/core';
import {TodoService} from "../../shared/todo.service";
import {ToDo} from "../../shared/todo.model";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-todo-detail',
  templateUrl: 'todo-detail.component.html',
  styleUrls: ['todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  todo: ToDo;
  id: string;
  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute) {

    this.subscription = activatedRoute.params.subscribe(
        (param: any) => {
          this.id = param['id'];
          this.getTodoDetail ();
        }
    );

  }

  getTodoDetail () {
    this.todo = this.todoService.getTodo(this.id);
  }

  ngOnInit() {
    this.getTodoDetail ();
  }

  ngOnDestroy () {
    this.subscription.unsubscribe()
  }

}
