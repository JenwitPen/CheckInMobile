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

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.GetCustomerList();
  }

  GetCustomerList() {
    let eaid = localStorage.getItem("eaid");

    this.customerService.Get(eaid).subscribe(
      jsonObject => {
        console.log(jsonObject);
      },
      error => {
        this.data = [ {
          address: "",
          cardCode: "8400030675",
          cardName: "โรงเรียนเจริญวิทยศึกษา",
          county: "",
          phone: "",
          total: "1",
          tripEaCustomerID: "84054",
          tripEaID: "1943",
          tripName: "สิงหาคม 2019",
          customerType: "School"
        }];
      }
    );
  }

  Logout() {
    localStorage.clear();
    return this.router.navigateByUrl("/");
  }

  GotoLocation() {
    return this.router.navigateByUrl("/checkinlocation");
  }

  GotoCheckinList() {
    return this.router.navigateByUrl("/checkinlist");
  }
}
