import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { SubjectRequestBody } from './interface/SubjectRequestBody';

@Injectable({
    providedIn: 'root'
})

export class SubjectService {
    private readonly SelectSubject_URL = environment.baseurl + "subject/selectSubject/";

    private httpOptions = {
        headers: new HttpHeaders({
            "api-key": "1234",
            "Content-Type": "application/json"
        })
    }

    constructor(private http: HttpClient) { }

    public GetSelectSubject(cardCode: number, type: string, customerType: string) {
        const inReq: SubjectRequestBody = {
            cardCode: cardCode,
            type: type,
            customerType: customerType
        };

        return this.http.post(this.SelectSubject_URL, inReq, this.httpOptions);
    }
}
