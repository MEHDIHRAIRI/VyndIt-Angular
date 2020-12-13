import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
usrname : string = ''
url="http://localhost:3000/user/";
  constructor(private http: HttpClient, private router: Router) { }
  getUserbyusername(username: string) : Observable<any[]>{
    console.log("username in service",username);
    
    return this.http.get<any[]>(this.url +'?username='+username);
  }
  getalluser() {
    return this.http.get<any>(this.url);
  }
  getUserr() {
    return this.usrname
  }
  deleteuser(id:number){
    console.log(id);
    return this.http.delete(this.url+id);
  }
  getUserbyid(id: number) {
    return this.http.get(this.url + id);
  }
  updateUser(data: any, id: any): Observable<any> {
    return this.http.put(this.url+id, data);
  }
}
