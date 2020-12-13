import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent implements OnInit {
store;
id;
name;
lat = 51.678418;
lng = 7.809007;
  constructor(private servicestore: StoreService,private activatedRoute:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.servicestore.getStorebyid(this.activatedRoute.snapshot.params['id']).subscribe(
      data => {
      this.store = data;
      console.log(this.store);
      }, error => {
        console.log(error);
        alert('id not found');
      }
    )
  ;
  }

}
