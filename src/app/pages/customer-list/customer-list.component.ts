import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerService } from 'src/app/services/customer.service';
import { CustomerResponseBody } from './../../services/interface/CustomerResponseBody';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  wording: string = "";

  data: CustomerResponseBody[] = [];

  constructor(
    private router: Router,
    private customerService: CustomerService) { }

  ngOnInit() {
    if (localStorage.getItem("eaid") == "") {
      this.Logout();
    }else {
      this.GetCustomerList();
    }
  }

  GetCustomerList() {
    this.wording = "";

    this.customerService.GetSelectCustomerList(localStorage.getItem("eaid")).subscribe(
      jsonObject => {
        this.data = <CustomerResponseBody[]>jsonObject;
        console.log("Loading data Completed.");
      },
      error => {
        this.data = [];
        console.log("Data not found !");
      }
    );
  }

  GotoLocation() {
    return this.router.navigate(['checkinlocation']);
  }

  GotoCheckinList(id: string) {
    return this.router.navigate(['checkinlist'], { queryParams: { TripEAID: id } });
  }

  Logout() {
    localStorage.clear();
    return this.router.navigate(['']);
  }
}
