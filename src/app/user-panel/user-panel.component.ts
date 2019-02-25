import { Component, OnInit }    from '@angular/core';
import {UserService}            from "../shared/user.service";
import {User}                   from "../shared/user.model";
import { users }                from "../shared/user.data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-panel',
  templateUrl: 'user-panel.component.html',
  styleUrls: ['user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  user: User;

  constructor( private userService: UserService,
               private router: Router ) {
  }

  logout () {
    this.user.name = null;
    this.user.password = null;
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.user= this.userService.user;
  }

}
