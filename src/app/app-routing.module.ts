import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LaptopDetailFormComponent } from './laptop-details/laptop-detail-form/laptop-detail-form.component';
import {TicketViewComponent} from './ticket-view/ticket-view.component'
const routes: Routes = [
  { path: '', component:RegistrationDetailsComponent},
  { path: 'laptop-details', component: LaptopDetailsComponent },
  {path:'ticket-view',component:TicketViewComponent}

]; // sets up routes constant where you define your routes


@NgModule({ 
  declarations: [],
  imports: [
    //CommonModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]  
  
})
export class AppRoutingModule { }
