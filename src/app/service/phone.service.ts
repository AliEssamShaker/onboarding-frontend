import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {PhoneModel} from "../model/phone.model";
import { PhoneVerificationModel } from '../model/phoneVerification.model';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private BASE_URI = "/api/v1/users/";
  constructor(private http: HttpClient) { }

  createPhone(phone: PhoneModel): Observable<PhoneModel> {
    const url = `${this.BASE_URI}/${phone.userId}/phones`
    return this.http.post<PhoneModel>(this.BASE_URI, phone);
  }

  findAllPhones(userId: string): Observable<PhoneModel[]> {
    const url = `${this.BASE_URI}/${userId}/phones`
    return this.http.get<PhoneModel[]>(this.BASE_URI);
  }

  getPhone(phoneId: string, userId: string): Observable<PhoneModel> {
    const url = `${this.BASE_URI}/${userId}/phones/${phoneId}`
    return this.http.get<PhoneModel>(url);
  }

  updatePhone(phone: PhoneModel): Observable<PhoneModel> {
    const url = `${this.BASE_URI}/${phone.userId}/phones/${phone.phoneId}`
    return this.http.put<PhoneModel>(url, phone);
  }

  deletePhone(phone: PhoneModel): Observable<PhoneModel> {
    const url = `${this.BASE_URI}/${phone.userId}/phones/${phone.phoneId}`
    return this.http.delete<PhoneModel>(`url`);
  }

  initiateVerification(phone: PhoneModel): Observable<PhoneVerificationModel>{
    const url = `${this.BASE_URI}/${phone.userId}/phones/${phone.phoneId}/initiateVerification`;
    return this.http.post<PhoneVerificationModel>(url, phone)
  }

  completeVerification(phone: PhoneModel, phoneVerification: PhoneVerificationModel): Observable<PhoneVerificationModel>{
    const url = `${this.BASE_URI}/${phone.userId}/phones/${phone.phoneId}/completeVerification`;
    return this.http.post<PhoneVerificationModel>(url, phoneVerification)
  }

  

}
