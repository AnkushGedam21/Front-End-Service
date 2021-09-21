import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../utility/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginserviceService {

  private userurl: string;
  public userInfo = new BehaviorSubject<User | null>(null);
  private users: User[] = [];
  private currentUser: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    this.userurl = 'http://localhost:8082/staffs';
    this.loadData();
    this.currentUser = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user'))
    );
  }

  loadData() {
    this.http.get<User[]>(this.userurl).subscribe((users) => {
      this.users.splice(0, this.users.length);
      this.users.push(...users);
    });
    return this.users;
  }
  login(email: string, password: string): boolean {
    const foundUser: User = this.users.find(
      (ob) => ob.email === email && ob.password === password
    );
    if (foundUser) {
      this.userInfo.next(foundUser);
      return true;
    } else {
      return false;
    }
  }
  logout(){
    this.userInfo.next(null);
  }
}
