import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ToDo } from "./todo.model";

export class InMemoryDataService implements InMemoryDbService {

    createDb(): ToDo[] {
        let todos = [
            {
                id: 1,
                title: 'Learn JavaScript',
                addedDate: new Date(2011, 3, 7),
                updatedDate: new Date(2011, 8, 6),
                addedUser: "Ali"
            },
            {
                id: 2,
                title: 'Learn TypeScript',
                addedDate: new Date(2013, 5, 2),
                updatedDate: new Date(2014, 2, 1),
                addedUser: "Vli"
            },
            {
                id: 3,
                title: 'Learn Angular 2',
                addedDate: new Date(2015, 8, 7),
                updatedDate: null,
                addedUser: "Vanya"

            }
        ];

        return todos;
    }
}