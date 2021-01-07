import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LaptopDetail } from '../shared/laptop-detail.model';
import { LaptopDetailService } from '../shared/laptop-detail.service';

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styles: [
  ]
})
export class LaptopDetailsComponent implements OnInit {

  constructor(public service : LaptopDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord:LaptopDetail){
    this.service.formData=Object.assign({},selectedRecord);
  }
  onDelete(id:number){
    if(confirm('Are you sure want to delete this record'))
    {
    this.service.deleteLaptopDetail(id)
    .subscribe(
      res=>{
        this.service.refreshList();
        this.toastr.error("Deleted Succesfully!","Laptop Customer Service Portal")
      },
      err=>{console.log(err)}

    )
    }
  }
}
