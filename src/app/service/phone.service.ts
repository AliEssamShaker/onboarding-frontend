import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {PhoneModel} from "../model/phone.model";
import {PhoneVerificationModel} from '../model/phoneVerification.model';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private BASE_URI = "/api/v1/users";

  constructor(private http: HttpClient) {
  }

  createPhone(phone: PhoneModel, userId: string): Observable<PhoneModel> {
    const url = `${this.BASE_URI}/${userId}/phones`
    return this.http.post<PhoneModel>(url, phone);
  }

  findAllPhones(userId: string): Observable<PhoneModel[]> {
    const url = `${this.BASE_URI}/${userId}/phones`
    return this.http.get<PhoneModel[]>(url);
  }

  getPhone(phoneId: string, userId: string): Observable<PhoneModel> {
    const url = `${this.BASE_URI}/${userId}/phones/${phoneId}`
    return this.http.get<PhoneModel>(url);
  }

  updatePhone(phone: PhoneModel, userId: string): Observable<PhoneModel> {
    const url = `${this.BASE_URI}/${userId}/phones/${phone.phoneId}`
    return this.http.put<PhoneModel>(url, phone);
  }

  deletePhone(phoneId: string, userId: string): Observable<PhoneModel> {
    const url = `${this.BASE_URI}/${userId}/phones/${phoneId}`
    return this.http.delete<PhoneModel>(url);
  }

  initiateVerification(userId: string, phoneId: string ): Observable<PhoneVerificationModel> {
    const url = `${this.BASE_URI}/${userId}/phones/${phoneId}/initiateVerification`;
    return this.http.post<PhoneVerificationModel>(url, phoneId)
  }

  completeVerification(userId: string, phoneId: string  ,code: string): Observable<PhoneVerificationModel> {
    const url = `${this.BASE_URI}/${userId}/phones/${phoneId}/completeVerification`;
    const body = {
      code: code
    };
    return this.http.post<PhoneVerificationModel>(url, body);
  }


}
