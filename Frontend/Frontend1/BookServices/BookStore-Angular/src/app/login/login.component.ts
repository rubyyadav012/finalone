import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookservicesService } from '../bookservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    Reader={
    username:"",
    password:""
    }

  constructor(private bookServices: BookservicesService,private fb:FormBuilder,private router: Router) { }

  ngOnInit(): void {

  }
    public frmRegister = this.fb.group({

      password: this.fb.control('', [Validators.required]),
      username: this.fb.control('', [Validators.required]),
    })


    get password() {
      return this.frmRegister.get("password") as FormControl;
    }

    get username() {
      return this.frmRegister.get("username") as FormControl;
    }



    RegisterClick(register: any) {
      console.log(register);

      const promise = this.bookServices.login(register);

      promise.subscribe((res: any) => {
        this.saveUser(res);
        console.log(res);
        console.log(res.roles[0]);
        this.router.navigate(['/home']);
      }, (error: any) => {

      });
    }

    public saveUser(res: any): void {
      window.sessionStorage.removeItem('token');
      window.sessionStorage.removeItem('email');
      window.sessionStorage.removeItem('id');
      window.sessionStorage.removeItem('roles');
      window.sessionStorage.removeItem('accessToken');
      window.sessionStorage.removeItem('username');

      window.sessionStorage.setItem('id',res.id );
      window.sessionStorage.setItem('role', res.roles[0]);
      //window.sessionStorage.getItem('role');
    }

    }



