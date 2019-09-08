import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class CustomerService {
    private readonly CustomerList_URL = environment.baseurl + "customer/selectCustomerList/";

    private httpOptions = {
        headers: new HttpHeaders({
            "api-key": "1234",
            "Content-Type": "application/json"
        })
    }

    constructor(private http: HttpClient) { }

    public Get(eaid: string) {

        return this.http.get(this.CustomerList_URL + eaid, this.httpOptions);
    }
}
