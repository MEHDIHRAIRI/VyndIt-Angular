import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../store.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.css']
})
export class IndexUserComponent implements OnInit {
  @Input() username:string;
    usrname;
    stores:any; 
    name;
    x=false;
    comanyname;
    store:any;
    se;
    c;
    searchName:string;
  constructor(private usrService:UserService,private storeservice:StoreService,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.storeservice.getallstores().subscribe(us=>this.stores=us);
    this.usrname=this.usrService.usrname;
  }

    
}
