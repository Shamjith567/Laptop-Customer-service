import { Component, OnInit } from '@angular/core';
import { RegistrationDetailService } from '../shared/registration-detail.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService,Toast } from 'ngx-toastr';
import {NgForm} from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styles: [
  ]
})
export class RegistrationDetailsComponent implements OnInit {
// username:string;
// password:string;
  constructor(private route:ActivatedRoute,private router:Router,public service : RegistrationDetailService,
    private toastr:ToastrService) { }
  
  ngOnInit(): void {
    this.service.refreshList();
  }

loginUser(form:NgForm)
{
  if(this.service.userName=="admin" && this.service.passWord=="admin")
  {
    this.router.navigateByUrl('/laptop-details');
  }
    else
    {
     for(let ud of this.service.list){
        if(this.service.userName==ud.email && this.service.passWord==ud.password)
       //this.toastr.warning('invalid Username or Password');
      { this.router.navigateByUrl('/laptop-details');}
     

  }}
  
}
}