import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
        name:[''],
        price: [''],
        description: ['']
      })
    }

  ngOnInit(): void {

    
  }
  onSubmit(book:any):any{
    
    const promise = this.bookservices.addBook(book);


    promise.subscribe((res: any) => {

      console.log(res);

    }, (error: any) => {

      console.log(error);

    });
  }

}
