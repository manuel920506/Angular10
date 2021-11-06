import { User } from '../../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { createElementCssSelector } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading : boolean = false;
  login: FormGroup;
  userHasErrorRequired: Boolean = false;
  passwordHasErrorRequired: Boolean = false;
  
  constructor(private fb: FormBuilder, private toastr: ToastrService, private route: Router) 
  { 
    this.login = this.fb.group
    (
      {
        user: ['', Validators.required],
        password:['', Validators.required]
      }
    )
  }

  ngOnInit(): void {
  }
  
  log(): void{ 
    // this.userHasErrorRequired = this.login.get("user").hasError('required');
    // this.passwordHasErrorRequired = this.login.get("password").hasError('required'); 
    console.log(this.login);   

    const user: User = {
      UserNAme: this.login.value.user,
      Password: this.login.value.password
    }

    this.loading = true;
    setTimeout(() => 
    {
      if(user.UserNAme === 'mrodriguez' && user.Password === '123')
      {
        this.login.reset();
         this.route.navigate(['/dashboard']);
      }
      else
      {
          this.toastr.error('User or password wrong', 'Error');
          this.login.reset();
      }
      this.loading = false;
    }, 3000)
  
    console.log(user);
  } 
}
