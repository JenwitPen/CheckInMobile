import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class CustomerService {
    private readonly SelectCustomerList_URL = environment.baseurl + "customer/selectCustomerList/";
    private readonly SelectCustomerDetail_URL = environment.baseurl + "customer/selectCustomerDetail/";

    private httpOptions = {
        headers: new HttpHeaders({
            "api-key": "1234",
            "Content-Type": "application/json"
        })
    }

    constructor(private http: HttpClient) { }

    public GetSelectCustomerList(eaid: string) {
        return this.http.get(this.SelectCustomerList_URL + eaid, this.httpOptions);
    }

    public GetSelectCustomerDetail(cardcode: string) {
        return this.http.get(this.SelectCustomerDetail_URL + cardcode, this.httpOptions);
    }
}
