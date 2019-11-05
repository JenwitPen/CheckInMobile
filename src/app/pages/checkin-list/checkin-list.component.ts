import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CheckInService } from 'src/app/services/checkin.service';
import { CheckInResponseBody } from './../../services/interface/CheckInResponseBody';

@Component({
  selector: 'app-checkin-list',
  templateUrl: './checkin-list.component.html',
  styleUrls: ['./checkin-list.component.css']
})
export class CheckinListComponent implements OnInit {
  data: CheckInResponseBody[] = [];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private checkinService: CheckInService) { }

  ngOnInit() {
    this.GetCheckInList();
  }

  GetCheckInList() {
    let triped = "";

    this.route
      .queryParams
      .subscribe(params => {
        triped = params['TripEAID'] || 0;
      });

    this.checkinService.GetSelectCheckinList(triped).subscribe(
      jsonObject => {
        this.data = <CheckInResponseBody[]>jsonObject;
        console.log("Loading data Completed.");
      },
      error => {
        this.data = [];
        console.log("Data not found !");
      }
    );
  }

  GotoActivity(id: string, name: string) {
    return this.router.navigate(['activitylist'], { queryParams: { checkInID: id , checkInName: name} });
  }
}
