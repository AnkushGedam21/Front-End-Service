import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../utility/patient.model';
import { User } from '../utility/user.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminserviceService {
  allPatients: Patient[] = [];
  allUsers: User[];
  private baseurl: string;
  response: any;
  constructor(private http: HttpClient) {
    this.baseurl = 'http://localhost:8085/admin/';
  }

  getAllPatient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseurl}/patient-list`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseurl}/user-list`);
  }

  editPatientStatus(allPatientId: number[], allPatientStatus: string[]) {
    return this.http.put<Patient>(
      `${this.baseurl}/patient/editstatus/` +
        allPatientId +
        `/` +
        allPatientStatus,
      Patient
    );
  }
  editEmployeeStatus(allEmployeeId: number[], allEmployeeStatus: string[]) {
    return this.http.put<Patient>(
      `${this.baseurl}/employee/editstatus/` +
        allEmployeeId +
        `/` +
        allEmployeeStatus,
      Patient
    );
  }

  getOnePatient(patient_id: number) {
    return this.http.get<User>(this.baseurl + 'patient/' + patient_id);
  }
  getOneUser(staffId: number) {
    return this.http.get<User>(this.baseurl + 'user/' + staffId);
  }
  getPatientCount(){
    return this.http.get<Response>(this.baseurl+'patients/patientcount');
    
  }
  // activatePatient(patientId: number) {
  //   return this.http
  //     .put<any>(this.baseurl + 'patient/activate/' + patientId, {
  //       responseType: 'text',
  //     })
  //     .pipe(
  //       tap((data) => {
  //         this.response = data;
  //         return this.response;
  //       })
  //     );
  //}
}
