import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { store } from './model/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
url='http://localhost:3000/store/';
  constructor(private router:Router,private http:HttpClient) { }
  addstore(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }
  getallstores() {
    return this.http.get<store[]>(this.url);
  }
  getStorebyid(id:number){
      return this.http.get(this.url + id);
    
  }
  getStorebyname(name:string){
    return this.http.get(this.url + name);
  
}
  submit(form) {

    this.addstore(form)
      .subscribe(() => {
        console.log('Store added')
        this.router.navigateByUrl('/index-user');  
      },
        (error) => {
          switch (error.status) {
            case 404: {
              console.log('Not Found');
              break;
            }
            case 403: {
              console.log('Access Denied');
              break;
            }
            case 500: {
              console.log('Internal Server Error: ');
              break;
            }


          }

        }
      );
  }
}
