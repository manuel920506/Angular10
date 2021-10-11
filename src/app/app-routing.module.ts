import { LoginComponent } from './componets/start/login/login.component';
import { RegisterComponent } from './componets/start/register/register.component';
import { WelcomeComponent } from './componets/start/welcome/welcome.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' } , 
  { path: 'welcome', component: WelcomeComponent } , 
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: '**', redirectTo: '/welcome', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
