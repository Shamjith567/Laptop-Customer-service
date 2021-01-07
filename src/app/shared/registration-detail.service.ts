import { Injectable } from '@angular/core';
import { RegistrationDetail } from './registration-detail.model';
import {HttpClient } from '@angular/common/http'
import { LaptopDetail } from './laptop-detail.model';
@Injectable({
  providedIn: 'root'
})
export class RegistrationDetailService {
  

  constructor(private http:HttpClient) { }

  readonly baseURL='http://localhost:56373/api/Registration'
  formData:RegistrationDetail=new RegistrationDetail();
  list :RegistrationDetail[];
  passWord: string;
  userName: string;
  postRegistrationDetail(){
   return this.http.post(this.baseURL,this.formData);
  }
  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then( res=> this.list = res as RegistrationDetail[]);
  }
}
