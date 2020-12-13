import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { user } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url='http://localhost:3000/user/';

  
  constructor(private http: HttpClient, private router: Router) { }
  adduser(data: any): Observable<any> {
    return this.http.post
    (this.url, data);
  }
  getusers() {
    return this.http.get(this.url)
  }
  public login(userInfo: user){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
// Return to login page
  public isLoggedIn(){
    if(localStorage.getItem('username')==null)
    {
      this.router.navigateByUrl('/login');
    }
     return localStorage.getItem('username') !== null;
    }  
  // Logout 
  public logout(){
    localStorage.removeItem('username');
  }
  // Authentication


  submit(form) {

    this.adduser(form)
      .subscribe(() => {
        console.log('user added')
        
        this.router.navigateByUrl('/login');  
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
