import {Routes} from "@angular/router";
import {TodoDetailComponent} from "./todo-detail/todo-detail.component";
import {TodoListComponent} from "./todo-list/todo-list.component";

export const TODO_ROUTES: Routes = [
    { path: 'detail/:id', component: TodoDetailComponent },
    { path: 'list', component: TodoListComponent }
];