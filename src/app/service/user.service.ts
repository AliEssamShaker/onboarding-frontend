import { Injectable } from '@angular/core';

import {UserModel} from "../model/user.model";

import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URI = "/api/v1/users";
  constructor(private http: HttpClient) { }

  create(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.BASE_URI, user);
  }

  findAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.BASE_URI);
  }

  get(userId: string): Observable<UserModel> {
    const url = `${this.BASE_URI}/${userId}`
    return this.http.get<UserModel>(url);
  }

  update(user: UserModel): Observable<UserModel> {
    const url = `${this.BASE_URI}/${user.userId}`
    return this.http.put<UserModel>(url, user);
  }

  delete(userId: string): Observable<UserModel> {
    const url = `${this.BASE_URI}/${userId}`;
    return this.http.delete<UserModel>(`url`);
  }
}
