import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Patient } from '../utility/patient.model';
import { User } from '../utility/user.model';
import {tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  allPatients:Patient[]= [];
  allUsers:User[];
  private baseurl:string;
  response : any;
  constructor(private http:HttpClient) { 
    this.baseurl = 'http://localhost:8085/admin/';

  }

  getAllPatient():Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.baseurl}/patient-list`);
    // return this.http
    //   .get<Patient[]>(this.baseurl+"patient-list")
    //   .pipe(tap((listOfPatient) => {
       
    //     this.allPatients.splice(0, this.allPatients.length);
    //     this.allPatients.push(...listOfPatient)
    //   }))
    
  }

  
  getOnePatient(patient_id:number){
    return this.http.get<User>(this.baseurl+"patient/"+patient_id)
  }
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseurl}/user-list`);
    //return this.http.get<User[]>(this.baseurl+'user-list');
    
  }
  getOneUser(staffId:number){
return this.http.get<User>(this.baseurl+"user/"+staffId)
  }
  activatePatient(patientId :number){
     return this.http
    .put<any>(this.baseurl+"patient/activate/"+patientId, {responseType: 'text'})
    .pipe(tap((data) => {
      this.response = data;
      return this.response;
    }))
    
  }
  deactivatePatient(patientId:number){
    return this.http
    .put<any>(this.baseurl+"patient/deactivate/"+patientId, {responseType: 'text'})
    .pipe(tap((data) => {
      this.response = data;
      return this.response;
    }))
  }
  blcokedPatient(patientId:number){
    return this.http
    .put<any>(this.baseurl+"patient/blocked/"+patientId, {responseType: 'text'})
    .pipe(tap((data) => {
      this.response = data;
      return this.response;
    }))
  }

  activateUser(staffId:number){
    return this.http
    .put<any>(this.baseurl+"staff/deactivate/"+staffId, {responseType: 'text'})
    .pipe(tap((data) => {
      this.response = data;
      return this.response;
    }))
  }
  deactivateUser(staffId:number){
    this.http.put<any>(this.baseurl+"staff/activate/"+staffId,User).subscribe(
      (response) =>{
        this.response = response;
        return this.response;
      }
    );
  }
  blockedUser(staffId:number){
    this.http.put<any>(this.baseurl+"staff/activate/"+staffId,User).subscribe(
      (response) =>{
        this.response = response;
        return this.response;
      }
    );
  }
}
