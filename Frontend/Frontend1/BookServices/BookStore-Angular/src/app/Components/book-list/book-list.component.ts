import { Component, OnInit } from '@angular/core';
import { BookservicesService } from 'src/app/bookservices.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  Books:any = []
  constructor(private bookservices: BookservicesService) { }
  role:any = null;
  ngOnInit(): void {
    this.bookservices.getBook().subscribe(res=>{
      console.log(res)
      this.Books = res;
    })
    this.role=window.sessionStorage.getItem('role');
  }


  }


