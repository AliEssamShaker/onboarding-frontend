import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeHistoryModel } from '../model/changeHistory.model';

@Injectable({
  providedIn: 'root'
})
export class ChangeHistoryService {

  private BASE_URI = "/api/v1/users/";
  constructor(private http: HttpClient) { }

  findAllChangeHistory(userId: string): Observable<ChangeHistoryModel[]> {
    const url = `${this.BASE_URI}/${userId}/changes-history`
    return this.http.get<ChangeHistoryModel[]>(this.BASE_URI);
  }

  getChangeHistory(versionId: string, userId: string): Observable<ChangeHistoryModel> {
    const url = `${this.BASE_URI}/${userId}/changes-history/${versionId}`
    return this.http.get<ChangeHistoryModel>(url);
  }
}
