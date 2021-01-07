import { Component, OnInit } from '@angular/core';
import { RegistrationDetailService } from 'src/app/shared/registration-detail.service';
import {NgForm} from '@angular/forms'
import { RegistrationDetail } from 'src/app/shared/registration-detail.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registration-detail-form',
  templateUrl: './registration-detail-form.component.html',
  styles: [
  ]
})
export class RegistrationDetailFormComponent implements OnInit {

  constructor(public service:RegistrationDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
onSubmit(form:NgForm){
 this.service.postRegistrationDetail().subscribe(
  res=>{
  this.resetForm(form);
 this.toastr.success('User Registration Succesfull! Please Login to continue.','Registration Status')
  },
  err =>{
    console.log(err);}
);


}

resetForm(form:NgForm){
  form.form.reset();
  this.service.formData= new RegistrationDetail();
}
}
