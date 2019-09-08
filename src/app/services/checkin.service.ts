import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class CheckInService {
    private readonly CheckinList_URL = environment.baseurl + "checkin/selectCheckinList/";

    private httpOptions = {
        headers: new HttpHeaders({
            "api-key": "1234",
            "Content-Type": "application/json"
        })
    }

    constructor(private http: HttpClient) { }

    public Get(tripEaid: string) {

        return this.http.get(this.CheckinList_URL + tripEaid, this.httpOptions);
    }
}
