import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
usrname;
id;
name;
user;
  constructor(private servicesuser: UserService,private activatedRoute: ActivatedRoute,
    private router: Router, private fb: FormBuilder,private toastr:ToastrService) {

     }
      form = this.fb.group({
        username: ['', Validators.required],
        fullname: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
      });

  ngOnInit(): void {
    
    this.servicesuser.getUserbyid(this.activatedRoute.snapshot.params['id']).subscribe(
        data => {
        this.user = data;
        console.log(this.user);
        this.id = this.user.id;
        this.name = this.user.name;
        this.form.patchValue(this.user);
        }, error => {
          console.log(error);
          alert('id not found');
        }
      )
    ;
  }
  
  get formControls() { return this.form.controls; }
  submit() {
    this.servicesuser
      .updateUser(this.form.value, this.id)
      .subscribe(() => {
        this.toastr.success('Hello  '+this.usrname, 'Profile Modified!');
        this.router.navigate(['/index-user']);
      });

  }
  resert(){
    this.form.reset();
  }

}
