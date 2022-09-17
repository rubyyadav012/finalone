import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const url="http://localhost:9093/digitalbooks/author/1/books"
const allbook="http://localhost:9093/digitalbooks/books/search/allBook"
const signupUrl="http://localhost:9093/api/auth/signup"
const login=   "http://localhost:9093/api/auth/login"
const paymentUrl="http://localhost:9093/bill/payment"

@Injectable({
  providedIn: 'root'
})
export class BookservicesService {

  public addBook(book:any){
    return this.http.post(url,book);
  }

  public getBook(){
    return this.http.get(allbook);
  }

  public signUp(author:any){
    return this.http.post(signupUrl,author)
  }

  public login(author:any){
    return this.http.post(login,author)
  }

  public payment(bill:any){
    return this.http.post(paymentUrl,bill)
  }

  constructor(private http:HttpClient) {
    
  }
}
