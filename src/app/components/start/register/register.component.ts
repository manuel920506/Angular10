import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import {UserService} from 'src/app/services/user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
register:FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.register = this.fb.group({
      user: ['', Validators.required],
      password:['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']
    }, {validators: this.checkPassword});
   }

  ngOnInit(): void {
  }

  registerUser(): void{
    console.log(this.register);

    const user: User = 
    {
      UserNAme : this.register.value.user,
      Password: this.register.value.password  
    }

    this.userService.saveUser(user).subscribe(data => 
    console.log(data)
    );
  }

  checkPassword(group: FormGroup): any{
    const pass = group.controls.password.value;
    const confirmPass  = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : {notSame: true}
  } 
}
