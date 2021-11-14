import { User } from '../../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; 
import { Router } from '@angular/router';
import {LoginService} from 'src/app/services/login.service';

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
  
  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private router: Router,
              private loginService: LoginService) 
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
    const user: User = {
      UserNAme: this.login.value.user,
      Password: this.login.value.password
    }

    this.loading = true;

    this.loginService.login(user).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.toastr.success(user.UserNAme + '!', 'Welcome');
      this.loginService.setLocalStorage(data.token);
      this.router.navigate(['/dashboard']);
    }, error => {
      this.loading  = false;
      this.login.reset();
      this.toastr.error(error.error.message, 'Error!'); 
    });
  }


    // setTimeout(() => 
    // {
    //   if(user.UserNAme === 'mrodriguez' && user.Password === '123')
    //   {
    //     this.login.reset();
    //      this.route.navigate(['/dashboard']);
    //   }
    //   else
    //   {
    //       this.toastr.error('User or password wrong', 'Error');
    //       this.login.reset();
    //   }
    //   this.loading = false;
    // }, 3000)
}  
