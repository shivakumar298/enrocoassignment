import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { AlertService } from "../services/alert.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    ngOnInit(): void {
      
    }

  model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register(data) {
      console.log('begin',data.firstName)
      localStorage.setItem("firstname", data.firstName);
       localStorage.setItem("lastname", data.lastName);
        localStorage.setItem("username", data.username);
         localStorage.setItem("password", data.password);
        this.loading = true;
        
          if(data.firstName != null)
                   { this.alertService.success('Registration successful', true);
                    this.router.navigate(['']);
                   }
     
                

                let firstname = localStorage.getItem("firstname");
                console.log('first name',firstname)
    }

}
