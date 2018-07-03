import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AlertService } from "./services/alert.service";
import { AuthenticationService } from "./services/authentication.service";
import { UserService } from "./services/user.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthGuard } from "./guards/auth.guard";
import { JwtInterceptor } from "./helpers/jwt.interceptor";
import { fakeBackendProvider } from "./helpers/fake-backend";
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
     HttpClientModule,
  ],
  providers: [    AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
