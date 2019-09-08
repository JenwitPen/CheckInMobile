import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckInService } from 'src/app/services/checkin.service';
import { CheckInResponseBody } from './../../services/interface/CheckInResponseBody';

@Component({
  selector: 'app-checkin-list',
  templateUrl: './checkin-list.component.html',
  styleUrls: ['./checkin-list.component.css']
})
export class CheckinListComponent implements OnInit {

  data: CheckInResponseBody[] = [];

  constructor(private router: Router, private checkinService: CheckInService) { }

  ngOnInit() {
    this.GetCheckInList();
  }

  GetCheckInList() {
    let eaid = localStorage.getItem("eaid");

    this.checkinService.Get("1970").subscribe(
      jsonObject => {
        this.data = <CheckInResponseBody[]>jsonObject;
      },
      error => {
        this.data = [{
          checkInID: "126157",
          checkInName: "กลับที่พัก",
          checkInDate: new Date(),
          cardCode: "0",
          checkInType: "1"
        }];
      }
    );
  }

  GotoActivity() {
    return this.router.navigateByUrl("/activitylist");
  }
}
