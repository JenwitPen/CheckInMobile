import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from './../../services/activity.service';
import { ActivityResponseBody } from './../../services/interface/ActivityResponseBody';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  data: ActivityResponseBody[] = [];

  constructor(private router: Router, private activityService: ActivityService) { }

  ngOnInit() {
    this.GetActivityList();
  }

  GetActivityList() {
    let eaid = localStorage.getItem("eaid");

    this.activityService.Get("126157").subscribe(
      jsonObject => {
        this.data = <ActivityResponseBody[]>jsonObject;
      },
      error => {
        this.data = [{
          activityId: "11",
          activityName: "อื่นๆ",
          checkInId: "126157",
          createDate: "2019-08-07T18:08:12"
        }];
      }
    );
  }

  Logout() {
    localStorage.clear();
    return this.router.navigateByUrl("/");
  }

  GotoLocation() {
    return this.router.navigateByUrl("/");
  }
}
