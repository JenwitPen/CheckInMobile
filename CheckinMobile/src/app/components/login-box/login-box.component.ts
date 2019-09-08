import { Component, OnInit } from '@angular/core';
import { AccountService } from './../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit {
  Username: string = "prapassorn@maceducation.com";
  Password: string = "48012";

  constructor(private router: Router, private accountService: AccountService) { }

  ngOnInit() {
  }

  Login() {
    if (this.Username == "") {
      return alert("กรุณากรอกรหัสนักศึกษา!");
    } else if (this.Password == "") {
      return alert("กรุณากรอกรหัสผ่าน!");
    } else {
      this.accountService.Login(this.Username, this.Password).subscribe(
        jsonObject => {
          localStorage.clear();
          localStorage.setItem("eaid", jsonObject["eaid"]);
          localStorage.setItem("userID", jsonObject["userID"]);
          localStorage.setItem("username", this.Username);
          localStorage.setItem("name", jsonObject["name"]);
          return this.router.navigateByUrl("/customerlist");
        },
        error => {
          return alert("Please contact admin!\nMessage: " + error.message);
        }
      );
    }
  }
}
