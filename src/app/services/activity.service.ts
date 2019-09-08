import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ActivityService {
    private readonly ActivityList_URL = environment.baseurl + "checkin/selectCheckinActivity/";

    private httpOptions = {
        headers: new HttpHeaders({
            "api-key": "1234",
            "Content-Type": "application/json"
        })
    }

    constructor(private http: HttpClient) { }

    public Get(checkinId: string) {

        return this.http.get(this.ActivityList_URL + checkinId, this.httpOptions);
    }
}
