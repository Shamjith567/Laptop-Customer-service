import { Component, OnInit } from '@angular/core';
import { LaptopDetailService } from 'src/app/shared/laptop-detail.service';
import {NgForm} from '@angular/forms'
import { LaptopDetail } from 'src/app/shared/laptop-detail.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-laptop-detail-form',
  templateUrl: './laptop-detail-form.component.html',
  styles: [
  ]
})
export class LaptopDetailFormComponent implements OnInit {

  constructor(public service:LaptopDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
onSubmit(form:NgForm){
 if(this.service.formData.laptopDetailId==0)
 this.insertRecord(form);
 else
 this.updateRecord(form);
}
insertRecord(form:NgForm){
  this.service.postLaptopDetail().subscribe(
    res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted Succesfully! Your Ticket has been created and reviewed shortly.')
    },
    err =>{console.log(err);}
    );
}

updateRecord(form:NgForm){
  this.service.putLaptopDetail().subscribe(
    res => {
       
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated Succesfully! Your Ticket has been created and reviewed shortly.')
       
      },
    err =>{console.log(err);}
    );

}


resetForm(form:NgForm){
  form.form.reset();
  this.service.formData=new LaptopDetail();
}
}
