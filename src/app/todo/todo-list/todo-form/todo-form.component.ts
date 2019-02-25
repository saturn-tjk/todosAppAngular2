import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../../shared/todo.service";
import {UserService} from "../../../shared/user.service";

@Component({
    selector: 'app-todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

    constructor(public todoService: TodoService,
                public userService: UserService) {
    }

    addTodo(event, input) {
        if (event && event.keyCode !== 13 || input.value == '') return;

        this.todoService.creat({
            title: input.value,
            addedDate: new Date(),
            addedUser: this.userService.user.name
        });
        input.value = "";
    }



    ngOnInit() {
    }

}
