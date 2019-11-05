import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { CheckInRequestBody } from './interface/CheckInRequestBody';

@Injectable({
    providedIn: 'root'
})

export class CheckInService {
    private readonly SelectCheckinList_URL = environment.baseurl + "checkin/selectCheckinList/";
    private readonly InsertCheckIn_URL = environment.baseurl + "checkin/insertCheckIn/";

    private httpOptions = {
        headers: new HttpHeaders({
            "api-key": "1234",
            "Content-Type": "application/json"
        })
    }

    constructor(private http: HttpClient) { }

    public GetSelectCheckinList(tripEaid: string) {
        return this.http.get(this.SelectCheckinList_URL + tripEaid, this.httpOptions);
    }

    public Save(tripEaID: number, checkInName: string, checkInAddress: string, latitude: string, longitude: string, remark: string, checkinImage: string,
        checkInType: number, tripEaCustomerID: number, energyTypeID: number, energyPrice: number, regionID: number) {

        const inReq: CheckInRequestBody = {
            tripEaID: tripEaID,
            checkInName: checkInName,
            checkInAddress: checkInAddress,
            latitude: latitude,
            longitude: longitude,
            remark: remark,
            checkinImage: checkinImage,
            checkInType: checkInType,
            tripEaCustomerID: tripEaCustomerID,
            energyTypeID: energyTypeID,
            energyPrice: energyPrice,
            regionID: regionID
        };

        return this.http.post(this.InsertCheckIn_URL, inReq, this.httpOptions);
    }
}
