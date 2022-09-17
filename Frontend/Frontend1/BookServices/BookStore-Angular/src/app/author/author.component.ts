import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BookservicesService } from '../bookservices.service';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  Author={
    username:"",
    password:"",
    email:"",
    roles:[]
  }
  role:any

  constructor(private bookServices: BookservicesService,private fb:FormBuilder) { }

  ngOnInit(): void {

  }
//  public frmRegister = this.fb.group({

  //   email: this.fb.control('', [Validators.required]),
  //   password: this.fb.control('', [Validators.required]),
  //   username: this.fb.control('', [Validators.required]),
  // })

  // get email() {
  //   return this.frmRegister.get("email") as FormControl;
  // }

  // get password() {
  //   return this.frmRegister.get("password") as FormControl;
  // }

  // get username() {
  //   return this.frmRegister.get("username") as FormControl;
  // }


  
  username:any =null;
  
  password:any =null;
  email:any= null;
  roles:any[] = []

  RegisterClick() {
    //
    this.roles.push(this.role)
   let req={

      'username': this.username,
      'password': this.password,
      email: this.email,
    role:this.role
    }
    console.log(req);
    
    const promise = this.bookServices.signUp(req);

    promise.subscribe((res: any) => {

      console.log(res);

    }, (error: any) => {


    });

  
  }
  
  }


