import { Component, OnInit } from '@angular/core';
import {LaptopDetailService} from '../shared/laptop-detail.service';
@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styles: [
  ]
})
export class TicketViewComponent implements OnInit {

  constructor( public  laptopdetailservice: LaptopDetailService) { }

  ngOnInit(): void {
    this.laptopdetailservice.refreshList();
  }

}
