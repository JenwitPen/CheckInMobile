import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';

import { LoginRequestBody } from './interface/LoginRequestBody';

@Injectable({
    providedIn: 'root'
})

export class AccountService {
    private readonly Login_URL = environment.baseurl + "ea/selectEa";

    private httpOptions = {
        headers: new HttpHeaders({
            "api-key": "1234",
            "Content-Type": "application/json"
        })
    }

    constructor(private http: HttpClient) { }

    public Login(username: string, password: string) {
        const inReq: LoginRequestBody = {
            username: username,
            password: password
        };

        return this.http.post(this.Login_URL, inReq, this.httpOptions);
    }
}
