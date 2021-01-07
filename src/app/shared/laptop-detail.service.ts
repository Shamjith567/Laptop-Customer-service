import { Injectable } from '@angular/core';
import { LaptopDetail } from './laptop-detail.model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LaptopDetailService {

  constructor(private http:HttpClient) { }

  //formData:LaptopDetail= new LaptopDetail();
  readonly baseURL ='http://localhost:56373/api/LaptopDetail'
  formData: LaptopDetail=new LaptopDetail();
  list:LaptopDetail[];
  ticketDetails: LaptopDetail=new LaptopDetail;
  postLaptopDetail(){
   return this.http.post(this.baseURL,this.formData)
  }

  putLaptopDetail(){
    return this.http.put(`${this.baseURL}/${this.formData.laptopDetailId}`,this.formData)
   }
deleteLaptopDetail(id:number){
  return this.http.delete(`${this.baseURL}/${id}`)
}
 refreshList(){
   this.http.get(this.baseURL)
   .toPromise()
   .then(res =>this.list= res as LaptopDetail[]);
 }

}
