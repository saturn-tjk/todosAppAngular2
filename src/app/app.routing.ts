import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {TodoComponent} from "./todo/todo.component";
import {TODO_ROUTES} from "./todo/todo.routes";

const APP_ROUTES: Routes = [
    { path: 'user', component: LoginComponent },
    { path: '', component: LoginComponent },
    { path: 'todo', component: TodoComponent },
    { path: 'todo', component: TodoComponent, children: TODO_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);