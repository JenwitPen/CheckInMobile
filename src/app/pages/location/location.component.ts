import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  location: string = "";
  disable: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.getGeoLocation()
      .then((position : any) => {
        
        var crd = position.coords;

        this.location = crd.latitude + ', ' + crd.longitude;;

        this.disable = false;
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  getGeoLocation() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  GotoCheckin(){
    return this.router.navigate(['checkindetail'], { queryParams: { Location: location } });
  }
}
