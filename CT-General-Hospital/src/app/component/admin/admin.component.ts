import { tap } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, pipe } from 'rxjs';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { User } from 'src/app/utility/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  patientData: any;
  userData: any;
  currentUser : BehaviorSubject<User>;
  patientCount: any[] =[];
  constructor(private toaster: ToastrService, private adminService:AdminserviceService, private loginService:LoginserviceService, private router:Router) {
    this.currentUser = loginService.userInfo;
  }
  
  ngOnInit(): void {
    this.loadPatientData();
    this.loadUserData();
  }

  loadPatientData() {
    this.adminService.getPatientCount()
    .subscribe(pipe(
      (data) => {
        this.patientCount.push(data)
        this.patientData = {
          labels: ['Total Patient', 'Active Patient', 'Need to be Activated'],
          datasets: [
            {
              label: 'Patient Overview',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: this.patientCount[0],
            },
          ],
        };
        return this.patientCount[0];
      }
    ));
   
    
    
  }
  loadUserData() {
    this.userData = {
      labels: ['Total Staff', 'Active Staff', 'Need to be Activated'],
      datasets: [
        {
          label: 'Hospital User Overview',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [63, 27, 78],
        },
      ],
    };
  }
  goToPatientDetails(){
    this.router.navigate(['patient-details'])
  }
}
