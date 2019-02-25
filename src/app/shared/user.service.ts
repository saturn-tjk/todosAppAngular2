
import {Injectable} from "@angular/core";
import {User} from "./user.model";

@Injectable ()
export class UserService {
    user:User;

    constructor () {
      this.user = {name: null, password: null};
      console.log(this.user);
    }

    getUser (): User {
        return this.user;
    }

    eddUser (user: User) {
        this.user.name = user.name;
        this.user.password = user.password;
        console.log(this.user);
    }

    deleteUser () {
        this.user = null;
    }
}
