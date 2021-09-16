import { tap } from 'rxjs/operators';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { Patient } from 'src/app/utility/patient.model';
import { User } from 'src/app/utility/user.model';

@Component({
  selector: 'app-patient-management',
  templateUrl: './patient-management.component.html',
  styleUrls: ['./patient-management.component.css']
})
export class PatientManagementComponent implements OnInit, AfterViewInit {
  user : User | null = null;
  allPatients :Patient[]=[];
  displayedColumns: string[] = ['patientId', 'firstName', 'createdOn', 'active','editstatus'];
  dataSource: MatTableDataSource<Patient>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  
  constructor(private adminService:AdminserviceService, private toastr:ToastrService,private loginService : LoginserviceService) {
    
  }
  ngOnInit():void{
    this.loadPatient();
    this.toastr.success("All Data loaded successfully")
    this.loginService.userInfo.subscribe((user)=>{this.user= user;})
  
  }
  refreshList(){
    this.ngOnInit();
  }
  loadPatient(){
    this.adminService.getAllPatient()
    .subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
        this.allPatients = data;
      },
      error =>{
        console.log(error);
      }
    )
    // this.adminService.getAllPatient().subscribe((listOfPatient) =>{
    //   this.allPatients = listOfPatient;
    //   // Assign the data to the data source for the table to render
    //   this.dataSource = new MatTableDataSource(this.allPatients);
    //   this.dataSource.paginator = this.paginator;
    // })
    
    
  }

  ngAfterViewInit() {
    
    
  }

  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  acivatePatient(patientId:number){
     this.adminService.activatePatient(patientId).subscribe(tap
      (data=>{
        console.log(data)
        this.loadPatient();
    }),
    (error) =>{
      console.log(error)
      this.loadPatient();
    })
    
  }
  deactivatePatient(patientId:number){
     this.adminService.deactivatePatient(patientId).subscribe(tap(data=>{
      console.log(data)
        this.loadPatient();
    }),
    (error) =>{
      console.log(error)
      this.loadPatient();
    })
    // this.adminService.deactivatePatient(patientId).subscribe(
    //   (response) =>{
    //     console.log(response);
    //   this.loadPatient();
    // },
    // error =>{
    //   console.log(error);
    //   this.loadPatient();
    // })
    
  }
  blockedPatient(patientId:number){
    this.adminService.blcokedPatient(patientId)
  }
}

/** Builds and returns a new User. */





