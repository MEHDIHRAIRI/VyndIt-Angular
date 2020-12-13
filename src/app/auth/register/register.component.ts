import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  errorMsg: string;
  submitted=false;
  
  constructor(private fb: FormBuilder, public authService: AuthService,
    private router: Router) { 
      this.form = this.fb.group({
        username: ['', Validators.required],
        fullname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required, Validators.minLength(10)],
    });}

  ngOnInit(): void {
  }
  get f() { return this.form.controls; }
  onReset() {
    this.form.reset();
}
onSubmit() {
  this.submitted = true;
  // stop here if form is invalid
  if (this.form.invalid) {
      return;
  }
  else{
    this.authService.submit(this.form.value);
  }

}
}
