import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';
import { LaptopDetailFormComponent } from './laptop-details/laptop-detail-form/laptop-detail-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { RegistrationDetailFormComponent } from './registration-details/registration-detail-form/registration-detail-form.component';
import { Routes, RouterModule } from '@angular/router';
import { TicketViewComponent } from './ticket-view/ticket-view.component';
@NgModule({
  declarations: [
    AppComponent,
    LaptopDetailsComponent,
    LaptopDetailFormComponent,
    RegistrationDetailsComponent,
    RegistrationDetailFormComponent,
    TicketViewComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
