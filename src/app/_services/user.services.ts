import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { config } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(${config.apiUrl}/users);
    }

    register(user: User) {
        return this.http.post(${config.apiUrl}/users/this.register, user);
    }

    delete(id: number) {
        return this.http.delete(${config.apiUrl}/users/${id});
    }
}
