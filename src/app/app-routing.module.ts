import { ChangePasswordComponent } from './components/dashboard/change-password/change-password.component';
import { QuestionnairesComponent } from './components/dashboard/questionnaires/questionnaires.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/start/login/login.component';
import { RegisterComponent } from './components/start/register/register.component';
import { WelcomeComponent } from './components/start/welcome/welcome.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';

const routes: Routes = 
[
  { path: '', redirectTo: '/start', pathMatch: 'full' } , 
  {path: 'start', component: StartComponent, children:
    [
      { path: '', component: WelcomeComponent } , 
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ]
  }, 
  {path: 'dashboard', component: DashboardComponent, children:
    [ 
      { path: '', component: QuestionnairesComponent },
      { path: 'changePassword', component: ChangePasswordComponent }
    ]
  },
  { path: '**', redirectTo: '/start', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
