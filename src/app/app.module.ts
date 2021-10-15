import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Moduli
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms'

//Componenti 
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StartComponent } from './componets/start/start.component';
import { WelcomeComponent } from './componets/start/welcome/welcome.component';
import { LoginComponent } from './componets/start/login/login.component';
import { RegisterComponent } from './componets/start/register/register.component';
  
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
