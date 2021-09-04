import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from '../utility/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  private userurl : string;
  public userInfo = new BehaviorSubject<Users | null>(null);
  private users :Users[] = [];
  private currentUser : BehaviorSubject<Users>;

  constructor(private http : HttpClient) {
    
    this.loadData();
    this.userurl = 'http://localhost:8082/staffs';
    this.currentUser = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('user')));
   }

  loadData() {
    this.http
      .get<Users[]>(this.userurl)
      .subscribe((users) => {
        this.users.splice(0, this.users.length);
        this.users.push(...users);
      });
  }
  login(email : any, password : any):Observable<Users[]>{
    return this.http.get<Users[]>(`${this.userurl}`);
    
  }
 
}
