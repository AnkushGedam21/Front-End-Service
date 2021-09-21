import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admincontent',
  templateUrl: './admincontent.component.html',
  styleUrls: ['./admincontent.component.css']
})
export class AdmincontentComponent implements OnInit {

  patientData: any;
  userData : any;
 
  constructor(private toaster:ToastrService) { }

  ngOnInit(): void {
    this.loadPatientData();
    this.loadUserData();
   }
    
  

loadPatientData(){
  this.patientData = {
    labels: ['Total Patient', 'Active Patient', 'Need to be Activated'],
    datasets: [
        {
            label: 'Patient Overview',
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            data: [63,27,78 ]
        }
    ]
}
}
loadUserData(){
  this.userData = {
    labels: ['Total Staff', 'Active Staff', 'Need to be Activated'],
    datasets: [
        {
            label: 'Hospital User Overview',
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            data: [63,27,78 ]
        }
    ]
}
}

}
