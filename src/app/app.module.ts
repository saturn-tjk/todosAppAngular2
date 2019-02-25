import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoFormComponent } from './todo/todo-list/todo-form/todo-form.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/todo-list/todo-item/todo-item.component';
import { TodoService } from "./shared/todo.service";
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import {routing} from "./app.routing";
import {UserService} from "./shared/user.service";
import { UserPanelComponent } from './user-panel/user-panel.component';
import {LoginComponent} from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
    UserPanelComponent,
    TodoDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [TodoService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
