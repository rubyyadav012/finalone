import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { BookListComponent } from './Components/book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
{
  path: '' , redirectTo:'Login', pathMatch: 'full'
},
{
  path: 'book-list' , component:BookListComponent
},
{
  path: 'add-book' , component:AddBookComponent
},
{
  path: 'edit-book/:id' , component:BookDetailsComponent
},

{
  path: 'Author' , component:AuthorComponent
},
{
  path: 'Login' , component:LoginComponent
},
{
  path: 'home' , component:HomeComponent
},

{
  path: 'payment/:id/:price' , component:PaymentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
