import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


const routes: Routes = [
  { 
      path: '', 
      component: LoginComponent 
  },
  { 
      path: 'signup', 
      component: SignupComponent 
  },
  { 
      path: 'dashboard', 
      component: DashboardComponent 
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);