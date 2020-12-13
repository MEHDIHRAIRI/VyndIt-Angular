import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() timeEvent = new EventEmitter();
  form: FormGroup;
  errorMsg: string;
  isSubmitted =false;
  username:string="hhhh";
  password:string;
  users:object;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder,private usrservice:UserService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get formControls() { return this.form.controls; }
  login() {
    this.isSubmitted = true;
    this.username=this.form.value.username;
    this.password = this.form.value.password;
    this.toastr.success('Hello  '+this.username, 'Welcome to VyndIt!');
    // Login Validation
    this.authService.getusers().subscribe((data: any ) => {
      this.users = data;
      for ( var val of data) {
        if (val['username'] == this.username &&  val['password'] == this.password) {
          this.authService.login(this.form.value);
          localStorage.setItem('username', this.username); 
          this.router.navigateByUrl('/index-user');  
          this.timeEvent.emit(this.username)
          this.usrservice.usrname=this.username;
          
      }
    }});
    
  }
}
