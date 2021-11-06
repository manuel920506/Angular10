import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Moduli
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http'

//Componenti 
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StartComponent } from './components/start/start.component';
import { WelcomeComponent } from './components/start/welcome/welcome.component';
import { LoginComponent } from './components/start/login/login.component';
import { RegisterComponent } from './components/start/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChangePasswordComponent } from './components/dashboard/change-password/change-password.component';
import { QuestionnairesComponent } from './components/dashboard/questionnaires/questionnaires.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { LoadingComponent } from './shared/loading/loading.component';
  
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ChangePasswordComponent,
    QuestionnairesComponent,
    NavbarComponent,
    LoadingComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
