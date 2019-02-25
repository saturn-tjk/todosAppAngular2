import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";

import 'rxjs/add/operator/toPromise';

import {ToDo} from "./todo.model";

@Injectable()
export class TodoService {

    private headers = new Headers ({'Content-Type': 'application/json'});
    private todosUrl = 'api/todos';

    constructor (private http: Http) {}

    getTodos(): Promise<ToDo[]> {
        return this.http.get(this.todosUrl)
            .toPromise()
            .then(responce => responce.json().data as ToDo[])
            .catch(this.handleError);
    }

    getTodo (id: number): Promise<ToDo> {
        const url = `${this.todosUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(responce => responce.json().data as ToDo)
            .catch( this.handleError );
    }

    update (hero: ToDo): Promise<ToDo> {
        const url = `${this.todosUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .catch( () => hero )
            .catch( this.handleError );
    }

    creat (todo: ToDo): Promise<ToDo> {
        return this.http
            .post(this.todosUrl, JSON.stringify(todo), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }



    private handleError (error: any): Promise<any> {
        console.error('An arror occured', error);
        return Promise.reject(error.message || error);
    }

}
