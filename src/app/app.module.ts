import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';

//Pages.
import { SplashScreenComponent } from './pages/splash-screen/splash-screen.component';
import { LoginComponent } from './pages/login/login.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { LocationComponent } from './pages/location/location.component';
import { CheckinDetailComponent } from './pages/checkin-detail/checkin-detail.component';
import { CheckinListComponent } from './pages/checkin-list/checkin-list.component';
import { ActivityListComponent } from './pages/activity-list/activity-list.component';
import { ActivityDetailComponent } from './pages/activity-detail/activity-detail.component';

//Services.
import { AccountService } from './services/account.service';
import { CustomerService } from './services/customer.service';
import { CheckInService } from './services/checkin.service';

import { MyFilterPipe } from './pages/customer-list/filter.pipe';


const appRoutes: Routes = [
  { path: '', component: SplashScreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'customerlist', component: CustomerListComponent },
  { path: 'checkinlocation', component: LocationComponent },
  { path: 'checkinlist', component: CheckinListComponent },
  { path: 'checkindetail', component: CheckinDetailComponent },
  { path: 'activitylist', component: ActivityListComponent },
  { path: 'activitydetail', component: ActivityDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginBoxComponent,
    LoginComponent,
    SplashScreenComponent,
    LocationComponent,
    CheckinDetailComponent,
    CheckinListComponent,
    ActivityListComponent,
    CustomerListComponent,
    ActivityDetailComponent,
    MyFilterPipe
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [AccountService, CustomerService, CheckInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
