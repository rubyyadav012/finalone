import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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



  }

  role:any = null;

 

  constructor(private bookServices: BookservicesService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {

  }

 public frmRegister = this.fb.group({

})

  username:any =null;
  password:any =null;
  email:any= null;
  
  RegisterClick() {

   if(this.username == null){

      alert("Please enter the User name")

      return

   }

   if(this.password == null){

    alert("Please enter the Password")

    return

   }

   if(this.email == null){

    alert("Please enter the Email")

    return

   }

   if(this.email == null){

    alert("Please enter the Email")

    return

   }

   if(this.role == null){

    alert("Please select the role")

    return

   }

 

   

   let req={

 

      'username': this.username,
      'password': this.password,
       email: this.email,
       role:this.role


    }

    console.log(req);

    const promise = this.bookServices.signUp(req);

    promise.subscribe((res: any) => {
      this.router.navigate(['/Login']);
      console.log(res);

    }, (error: any) => {

});

}
}
