import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserStoreService } from './user-store.service';

@Injectable(
  {
    providedIn: "root",
  }
)
export class UserService {

  private user_endpoint = "https://wine-server-heroku.herokuapp.com/api/user";

  constructor(private http: HttpClient, private userStore: UserStoreService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.user_endpoint}/login`, {
      username: username,
      password: password
    }).pipe(map((resp: any) => {
      this.userStore.token = resp.token;
      return resp;
    }));
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.user_endpoint}/register`, {
      username: username,
      password: password
    });
  }
}

