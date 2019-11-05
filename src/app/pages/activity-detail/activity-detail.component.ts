import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivityService } from './../../services/activity.service';
import { SelectActivityResponseBody, SelectActivitySubResponseBody } from 'src/app/services/interface/ActivityResponseBody';
import { SubjectService } from 'src/app/services/subject.service';
import { SelectSubjectResponseBody } from 'src/app/services/interface/SubjectResponseBody';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {
  activityList: SelectActivityResponseBody[] = [];
  activityId: number = -1;

  activitysubList: any[] = [];
  subactivityId: number = -1;
  activityShow: boolean = false;

  subjectList: SelectSubjectResponseBody[] = [];
  subjectId: number = -1;
  subjectShow: boolean = false;
  mostlikely: number = 0;

  contact: string = "";
  remark: string = "";
  position: string = "";
  email: string = "";
  telephone: string = "";

  type: string = ""; //from login page [localstorage]
  cardcode: number = -1; //from customer list  
  customertype: string = ""; //from customer list
  checkinid: number = -1; //from checkin list
  checkintype: boolean = true; //from checkin list

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subjectService: SubjectService,
    private activityService: ActivityService) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this.checkinid = params['checkinid'] || 0;
        this.checkintype = params['checkintype'] || false;
        this.cardcode = params['cardcode'] || 0;
        this.customertype = params['customertype'] || "";
      });
    this.type = localStorage.getItem("type");
    this.GetActivities();
  }

  GetActivities() {
    this.activityService.GetSelectActivity().subscribe(
      jsonObject => {
        let data = <SelectActivityResponseBody[]>jsonObject;

        for (let index = 0; index < data.length; index++) {
          const element = data[index];

          if (element.type == this.type && element.freeFlag == this.checkintype) {
            this.activityList.push(element);
          }
        }

        console.log("Loading data Completed.");
      },
      error => {
        this.activityList = [];
        console.log("Data not found !");
      }
    );
  }

  SelectActivityChange(id: number) {
    var activity = this.activityList.find(x => x.activityID == id);
    this.activityId = activity.activityID;

    if (activity.subjectFlag == true) {
      this.subjectShow = true;
      this.activityShow = false;
    }
    else {
      this.GetActivitiesSub(id);

      this.subjectShow = false;
      this.activityShow = true;
    }
  }

  GetSubject() {
    this.subjectList = [];

    this.subjectService.GetSelectSubject(this.cardcode, "", "").subscribe(
      jsonObject => {
        let data = <SelectSubjectResponseBody[]>jsonObject;

        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          this.subjectList.push(element);
        }

        console.log("Loading data Completed.");
      },
      error => {
        this.subjectList = [];
        console.log("Data not found !");
      }
    );
  }

  SelectSubjectChange(id: number) {
    var subject = this.subjectList.find(x => x.subjectID == id);

    this.subjectId = subject.subjectID;
    this.mostlikely = subject.mostLikely;
  }

  GetActivitiesSub(id: number) {
    this.activitysubList = [];

    this.activityService.GetSelectActivitySub(id, 0).subscribe(
      jsonObject => {
        let data = <SelectActivitySubResponseBody[]>jsonObject;

        for (let index = 0; index < data.length; index++) {
          const element = data[index];

          if (index == 0) {
            this.subactivityId = element.subActivityID;
          } else if (element.flagDefault == true) {
            this.subactivityId = element.subActivityID;
          }

          this.activitysubList.push(element);
        }

        console.log("Loading data Completed.");
      },
      error => {
        this.activitysubList = [];
        console.log("Data not found !");
      }
    );
  }

  SelectSubActivityChange(id: number) {
    this.subactivityId = id;

    this.subjectId = -1;
    this.mostlikely = 0;
  }

  Save() {

    // if (this.contact == "" || this.position == "" || this.email == "" || this.telephone == "" || this.remark == "") {
    // }

    this.activityService.insertCheckInActivity(
      this.checkinid,
      this.activityId,
      this.contact, this.remark, this.position, this.email, this.telephone,
      this.subactivityId,
      this.subjectId,
      this.mostlikely, this.cardcode).subscribe(
        jsonObject => {
          console.log("Save completed.");
          return this.router.navigateByUrl("/activitylist");
        },
        error => {
          console.log("Error.");
          return this.router.navigateByUrl("/activitylist");
        }
      );
  }
}
