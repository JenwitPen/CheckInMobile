import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ActivityService } from './../../services/activity.service';
import { ActivityResponseBody } from './../../services/interface/ActivityResponseBody';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  checkinname: string = "Test";
  data: ActivityResponseBody[] = [];

  constructor(
    private route: ActivatedRoute, private router: Router, private activityService: ActivityService) { }

  ngOnInit() {
    this.GetActivityList();
  }

  GetActivityList() {
    let checkinId = "";

    this.route
      .queryParams
      .subscribe(params => {
        checkinId = params['checkInID'] || 0;
        this.checkinname = params['checkInName'];
      });

    this.activityService.GetselectCheckinActivity(checkinId).subscribe(
      jsonObject => {
        this.data = <ActivityResponseBody[]>jsonObject;
        console.log("Loading data Completed.");
      },
      error => {
        this.data = [];
        console.log("Data not found !");
      }
    );
  }

  GotoActicityDetail() {
    return this.router.navigateByUrl("/activitydetail");
  }
}
