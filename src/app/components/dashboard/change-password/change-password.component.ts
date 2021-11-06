import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePassword: FormGroup;
  loading: boolean = false;
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private toastr:ToastrService,
    private router: Router
    ){
    this.changePassword = this.fb.group({
      lastPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']
    }, {validators: this.checkPassword})
  }

  ngOnInit(): void {
  }

  checkPassword(group: FormGroup): any{
    const pass = group.controls.newPassword.value;
    const confirmPass  = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : {notSame: true}
  } 

  SavePassword():void{
    console.log(this.changePassword);

    const changePassword:any = {
      lastPassword: this.changePassword.value.lastPassword,
      newPassword: this.changePassword.value.newPassword
    };
    console.log(changePassword);
    this.loading = true;
    this.userService.changePassword(changePassword).subscribe(data => {
      this.loading = false;
      this.toastr.info(data.message);
      this.router.navigate(['/dashboard']);
    }, error => {
    this.loading = false;
    this.changePassword.reset();
    this.toastr.error(error.error.message, 'Error!');
    
  })}; 
}
