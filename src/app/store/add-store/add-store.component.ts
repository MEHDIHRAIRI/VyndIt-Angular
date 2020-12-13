import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/store.service';
import { fileURLToPath } from 'url';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  form: FormGroup;
  errorMsg: string;
  file  =null;

  constructor(private fb:FormBuilder,public storeservice:StoreService,private router: Router,private http:HttpClient) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      companyname: ['', Validators.required],
      address: ['', Validators.required],
      photos: ['', Validators.required],
      phone: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required]
  });
  }
  

  ngOnInit(): void {
  }

  submit(){
    this.storeservice.submit(this.form.value)
    console.log(this.form)
  }
  OnFileselected(event){
    this.file=event.target.files[0]; 
  }
  upload(){

  }
 

}
