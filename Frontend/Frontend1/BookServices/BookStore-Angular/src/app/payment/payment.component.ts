import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookservicesService } from '../bookservices.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  bookId:any=null;
  price:any= null;
  cardNo:any = null;
  userId:any = null;
  Bill={
    "book":{"id":this.bookId},
     name:null,
    "email":" ",
   "paymentMethod":"",
   "totalAmount": this.price,
   "paymentStatus":"SUCCESS",
   "refund":"false",
    cardNo:""
   }



  constructor(private route:ActivatedRoute,private bookservices:BookservicesService,private router: Router) { }


  ngOnInit(): void {

    this.bookId = this.route.snapshot.paramMap.get("id");
    this.userId =window.sessionStorage.getItem('id');
    this.price = this.route.snapshot.paramMap.get("price");
    console.log("price="+this.price)
  }
  payment():any{

    this.Bill.book.id= this.bookId
    this.Bill.totalAmount = this.price;
    this.Bill.name  = this.userId
    const promise = this.bookservices.payment(this.Bill);
    promise.subscribe((res: any) => {
      console.log(res);
      alert("Payment done successfully");
      this.router.navigate(['/home']);

    }, (error: any) => {

      console.log(error)

    });
  }

}

function bill(bill: any) {
  throw new Error('Function not implemented.');
}

