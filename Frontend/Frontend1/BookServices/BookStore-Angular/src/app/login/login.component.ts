import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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

  constructor(private bookServices: BookservicesService,private fb:FormBuilder) { }

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
  
      }, (error: any) => {
  
      });
    }

    public saveUser(user: any): void {
      //window.sessionStorage.removeItem(USER_KEY);
      //window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    
    }
  
  

