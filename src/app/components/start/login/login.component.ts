import { User } from '../../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  userHasErrorRequired: Boolean = false;
  passwordHasErrorRequired: Boolean = false;
  
  constructor(private fb: FormBuilder) 
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
      nameUser: this.login.value.user,
      passwordUser: this.login.value.password
    }

    console.log(user);
  } 
}
