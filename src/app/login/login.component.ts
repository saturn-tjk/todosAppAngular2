import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/user.service";
import {User} from "../shared/user.model";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private userService: UserService,
              private router: Router) {  }

  login (form: NgForm) {
    this.userService.eddUser({name: form.value.name, password: form.value.password});
    this.router.navigate( ['/todo'] );
  }


  ngOnInit() {
  }

}
