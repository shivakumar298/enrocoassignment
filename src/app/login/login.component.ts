import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import { AlertService } from "../services/alert.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    err1: boolean;
    username: string;
    err: boolean=false;

 
   model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
       this.err = false
                    this.err1 = false
        let firstnam = localStorage.getItem("firstname");
                console.log('first name',firstnam)
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login(data) {
  
        this.loading = true;
          this.username = localStorage.getItem("username");
                  console.log('im in',this.model.password)
                  let password = localStorage.getItem("password");
      
                   console.log('im in')
                 console.log('im in subscribe',this.model.username)
                  if((this.model.username == this.username)&&(this.model.password ==password ))
                    {this.router.navigate(['./dashboard']);
                    this.err = false
                    this.err1 = false
                }
                  else  if((this.model.username == this.username)&&(this.model.password !=password ))
                  { this.err1 = true
                     this.err = false}
                  else
                    {
                      console.log('im in')
                      this.err = true
                       this.err1 = false
                   }

             
             
    }

}
