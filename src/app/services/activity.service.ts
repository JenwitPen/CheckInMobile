import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { ActivityRequestBody, ActivitySubRequestBody } from './interface/ActivityRequestBody';

@Injectable({
    providedIn: 'root'
})

export class ActivityService {
    private readonly SelectActivity_URL = environment.baseurl + "activity/SelectActivity/";
    private readonly SelectActivitySub_URL = environment.baseurl + "activity/SelectActivitySub/";
    private readonly SelectCheckinActivity_URL = environment.baseurl + "activity/selectCheckinActivity/";
    
    private readonly InsertActivity_URL = environment.baseurl + "activity/insertCheckInActivity/";

    private httpOptions = {
        headers: new HttpHeaders({
            "api-key": "1234",
            "Content-Type": "application/json"
        })
    }

    constructor(private http: HttpClient) { }

    public GetselectCheckinActivity(checkinId: string) {
        return this.http.get(this.SelectCheckinActivity_URL + checkinId, this.httpOptions);
    }

    public GetSelectActivity() {
        return this.http.get(this.SelectActivity_URL, this.httpOptions);
    }

    public GetSelectActivitySub(activityID: number, cardCode: number) {

        const inReq: ActivitySubRequestBody = {
            activityID : activityID,
            cardCode: cardCode
        };

        return this.http.post(this.SelectActivitySub_URL, inReq, this.httpOptions);
    }

    public insertCheckInActivity(checkInID: number, activityID: number,
        checkInActivityContact: string, checkInActivityRemark: string, checkInActivityPosition: string, checkInActivityEmail: string, checkInActivityTel: string,
        subActivityId: number, subjectID: number, mostLikely: number, cardCode: number) {

        const inReq: ActivityRequestBody = {
            checkInID: checkInID,
            activityID: activityID,
            checkInActivityContact: checkInActivityContact,
            checkInActivityRemark: checkInActivityRemark,
            checkInActivityPosition: checkInActivityPosition,
            checkInActivityEmail: checkInActivityEmail,
            checkInActivityTel: checkInActivityTel,
            subjectID: subjectID,
            subActivityId: subActivityId,
            mostLikely: mostLikely,
            cardCode: cardCode
        };

        console.log(inReq);

        return this.http.post(this.InsertActivity_URL, inReq);
        // return this.http.post(this.InsertActivity_URL, inReq, this.httpOptions);
    }
}
