import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , throwError } from 'rxjs';
import {Book} from './book'
import { catchError , map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //Node js Api
  REST_API:string = "http://localhost:9093/digitalbooks"
  //set http headers
  httpHeaders = new HttpHeaders().set('Content-Type' , 'application/json')

  constructor(private httpClient:HttpClient) {

   }
   //add records
   addBook(data:Book):Observable<any>{
    let API_URL  = `${this.REST_API}/add-book`;
    return this.httpClient.post(API_URL , data).pipe(catchError(this.handleError))

   }
   //get all books details

   getBooks(){
    return this.httpClient.get(`${this.REST_API}`);
   }

   //get single book
   getBook(id:any) :Observable<any>{
    let API_URL  = `${this.REST_API}/book/${id}`;
    return this.httpClient.get(API_URL ,{headers: this.httpHeaders}).pipe(map((res:any)=>{
      return res || {}
    }),
    catchError(this.handleError)
    )
   }
   //update bookData
   updateBook(id:any , data:any):Observable<any>{
    let API_URL  = `${this.REST_API}/book/update/${id}`;
    return this.httpClient.put(API_URL , data ,{headers: this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
   }

   //deleteBook
   deleteBook(id:any):Observable<any>{
    let API_URL  = `${this.REST_API}/delete-book/${id}`;
    return this.httpClient.delete(API_URL ,{headers: this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
   }
   //handleError

   handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      //Handle Client Side Error
      errorMessage = error.error.message;
    }else{
      //handle server side error
      errorMessage =  `ErrorCode: ${error.status}\n Message ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);

   }
}
