import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private servicesuser:UserService,private router:Router,private activatedRoute:ActivatedRoute) { }
usrname:string;
  ngOnInit(): void {
    this.usrname=this.servicesuser.usrname;
  this.servicesuser.deleteuser(this.activatedRoute.snapshot.params['id']).subscribe(data => this.router.navigate(['/index-user']));
  }

}
