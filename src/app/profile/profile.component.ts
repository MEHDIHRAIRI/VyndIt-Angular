import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { store } from '../model/store';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user ;
usrname;
  constructor(private servicesuser: UserService,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.usrname=this.servicesuser.usrname;
  console.log('usr name profile',this.usrname)
  this.servicesuser.getUserbyusername(this.usrname).subscribe(us=>this.user=us[0]);
  }
  

}
