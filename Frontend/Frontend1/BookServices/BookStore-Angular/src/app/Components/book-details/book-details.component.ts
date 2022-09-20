import { Component, OnInit , NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  getId:any;
  updateForm!: FormGroup;

  constructor(private formBuilder: FormBuilder ,
    private router: Router ,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudApi:CrudService ) {
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      this.crudApi.getBook(this.getId).subscribe(res=>{
        console.log(res);
        this.updateForm.setValue({
          title: res['title'],
          price: res['price'],
          contents: res ['contents']
        })
      });
      this.updateForm = this.formBuilder.group({
        title:[''],
        price: [''],
        contents: ['']
      })
    }

  ngOnInit(): void {
  }
  onUpdate(){
    this.crudApi.updateBook(this.getId , this.updateForm.value).subscribe(res=>{
      alert('Data Updated Successfully');
      this.ngZone.run(()=>{this.router.navigateByUrl('/book-list')})
    } , (err)=>{
      console.log(err);
    })
  }

}
