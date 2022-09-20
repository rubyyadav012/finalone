import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookservicesService } from 'src/app/bookservices.service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookform:FormGroup;
  books:any=[];

  constructor(private formBuilder: FormBuilder ,private bookservices:BookservicesService,
    private router: Router ,
    private ngZone: NgZone,
    private crudApi:CrudService ) { 
      
      this.bookform = this.formBuilder.group({

        title:this.formBuilder.control('',[Validators.required]),
        price: this.formBuilder.control('',[Validators.required]),
        catagory: this.formBuilder.control('',[Validators.required]),
        publisher:this.formBuilder.control('',[Validators.required]),
        publisherDate:this.formBuilder.control('',[Validators.required]),
        contents:this.formBuilder.control('',[Validators.required]),
        author:this.formBuilder.control('',[Validators.required]),
        status:1
      })
    }

      get title() {
        return this.bookform.get("title") as FormControl;
      }
  
      get price() {
        return this.bookform.get("price") as FormControl;  
    }

    get catagory() {
      return this.bookform.get("catagory") as FormControl;
    
  }

  get publisher() {
    return this.bookform.get("publisher") as FormControl;
  
}

get publisherDate() {
  return this.bookform.get("publisherDate") as FormControl;

}

get contents() {
  return this.bookform.get("contents") as FormControl;

}

get author() {
  return this.bookform.get("author") as FormControl;

}

  ngOnInit(): void {

    
  }
  onSubmit(book:any):any{
    console.log(book)
    const promise = this.bookservices.addBook(book);


    promise.subscribe((res: any) => {

      console.log(res);

    }, (error: any) => {

      console.log(error);

    });
  }

  }
function contents() {
  throw new Error('Function not implemented.');
}

